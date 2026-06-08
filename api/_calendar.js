import { createSign } from 'node:crypto'
import { businessConfig } from '../src/businessConfig.js'

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_CALENDAR_BASE_URL = 'https://www.googleapis.com/calendar/v3'
const CALENDAR_SCOPE = 'https://www.googleapis.com/auth/calendar'

export function getBookingConfig() {
  return businessConfig.bookingFlow
}

export function getSession(sessionId) {
  return getBookingConfig().sessions.find((session) => session.id === sessionId)
}

export function getCalendarId() {
  return process.env.GOOGLE_CALENDAR_ID || 'andrew.masad12@gmail.com'
}

export function isGoogleConfigured() {
  const hasServiceAccount = Boolean(process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY)
  const hasOAuthRefreshToken = Boolean(
    process.env.GOOGLE_OAUTH_CLIENT_ID &&
      process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
      process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
  )

  return Boolean(getCalendarId() && (hasServiceAccount || hasOAuthRefreshToken))
}

function base64Url(value) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

async function getServiceAccountAccessToken() {
  const now = Math.floor(Date.now() / 1000)
  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64Url(
    JSON.stringify({
      iss: process.env.GOOGLE_CLIENT_EMAIL,
      scope: CALENDAR_SCOPE,
      aud: GOOGLE_TOKEN_URL,
      exp: now + 3600,
      iat: now,
    }),
  )

  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  const unsignedToken = `${header}.${payload}`
  const signature = createSign('RSA-SHA256').update(unsignedToken).sign(privateKey, 'base64')
  const assertion = `${unsignedToken}.${signature.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')}`

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error_description || data.error || 'Unable to authenticate with Google Calendar.')
  }

  return data.access_token
}

async function getOAuthAccessToken() {
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error_description || data.error || 'Unable to refresh Google OAuth token.')
  }

  return data.access_token
}

async function getAccessToken() {
  if (!isGoogleConfigured()) {
    throw new Error('Google Calendar API credentials are not configured.')
  }

  if (process.env.GOOGLE_OAUTH_REFRESH_TOKEN) {
    return getOAuthAccessToken()
  }

  return getServiceAccountAccessToken()
}

async function googleRequest(path, options = {}) {
  const accessToken = await getAccessToken()
  const response = await fetch(`${GOOGLE_CALENDAR_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || 'Google Calendar request failed.')
  }

  return data
}

function toDateTime(date, time, offset) {
  return new Date(`${date}T${time}:00${offset}`)
}

function minutesFromTime(time) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000)
}

function overlaps(start, end, busyStart, busyEnd) {
  return start < busyEnd && end > busyStart
}

function isWithinBookingWindow(date) {
  const config = getBookingConfig()
  const today = new Date()
  const requested = new Date(`${date}T00:00:00${config.timeZoneOffset}`)
  const latest = addMinutes(today, config.bookingWindowDays * 24 * 60)

  return requested >= new Date(today.toDateString()) && requested <= latest
}

export async function getBusyTimes(timeMin, timeMax) {
  if (!isGoogleConfigured()) {
    return []
  }

  const data = await googleRequest('/freeBusy', {
    method: 'POST',
    body: JSON.stringify({
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      timeZone: getBookingConfig().timeZone,
      items: [{ id: getCalendarId() }],
    }),
  })

  return data.calendars?.[getCalendarId()]?.busy || []
}

export async function getAvailableSlots({ date, sessionId }) {
  const config = getBookingConfig()
  const session = getSession(sessionId)

  if (!session || !date || !isWithinBookingWindow(date)) {
    return []
  }

  const requestedDay = toDateTime(date, '12:00', config.timeZoneOffset).getDay()
  const windows = config.availability.filter((item) => item.day === requestedDay)

  if (!windows.length) {
    return []
  }

  const dayStart = toDateTime(date, '00:00', config.timeZoneOffset)
  const dayEnd = toDateTime(date, '23:59', config.timeZoneOffset)
  const busyTimes = await getBusyTimes(dayStart, dayEnd)
  const nowWithNotice = addMinutes(new Date(), config.minimumNoticeHours * 60)
  const slots = []

  for (const window of windows) {
    const startMinutes = minutesFromTime(window.start)
    const endMinutes = minutesFromTime(window.end)

    for (
      let minutes = startMinutes;
      minutes + session.durationMinutes <= endMinutes;
      minutes += config.slotIntervalMinutes
    ) {
      const hours = String(Math.floor(minutes / 60)).padStart(2, '0')
      const slotMinutes = String(minutes % 60).padStart(2, '0')
      const start = toDateTime(date, `${hours}:${slotMinutes}`, config.timeZoneOffset)
      const end = addMinutes(start, session.durationMinutes)
      const isBusy = busyTimes.some((busy) =>
        overlaps(start, end, new Date(busy.start), new Date(busy.end)),
      )

      if (!isBusy && start > nowWithNotice) {
        slots.push({
          start: start.toISOString(),
          end: end.toISOString(),
          label: start.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            timeZone: config.timeZone,
          }),
        })
      }
    }
  }

  return slots
}

export async function createBooking({ sessionId, start, client }) {
  const session = getSession(sessionId)
  const config = getBookingConfig()

  if (!session) {
    throw new Error('Invalid session selected.')
  }

  const startDate = new Date(start)
  const date = startDate.toLocaleDateString('en-CA', { timeZone: config.timeZone })
  const slots = await getAvailableSlots({ date, sessionId })
  const selectedSlot = slots.find((slot) => slot.start === start)

  if (!selectedSlot) {
    throw new Error('That time is no longer available. Please choose another slot.')
  }

  const event = await googleRequest(`/calendars/${encodeURIComponent(getCalendarId())}/events?sendUpdates=all`, {
    method: 'POST',
    body: JSON.stringify({
      summary: `${businessConfig.name}: ${session.name}`,
      description: [
        `Client: ${client.name}`,
        `Email: ${client.email}`,
        client.phone ? `Phone: ${client.phone}` : null,
        client.notes ? `Notes: ${client.notes}` : null,
        '',
        'Booked through the Masad Motion website.',
      ]
        .filter(Boolean)
        .join('\n'),
      start: {
        dateTime: selectedSlot.start,
        timeZone: config.timeZone,
      },
      end: {
        dateTime: selectedSlot.end,
        timeZone: config.timeZone,
      },
      attendees: [{ email: client.email, displayName: client.name }],
      reminders: {
        useDefault: true,
      },
    }),
  })

  return {
    id: event.id,
    htmlLink: event.htmlLink,
    start: selectedSlot.start,
    end: selectedSlot.end,
    sessionName: session.name,
  }
}
