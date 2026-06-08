import { createBooking, isGoogleConfigured } from './_calendar.js'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!isGoogleConfigured()) {
    return response.status(503).json({
      error:
        'Google Calendar sync is not configured yet. Add OAuth refresh token credentials or service account credentials in Vercel.',
    })
  }

  const { sessionId, start, client } = request.body || {}

  if (!sessionId || !start || !client?.name || !isValidEmail(client.email)) {
    return response.status(400).json({ error: 'Session, time, name, and a valid email are required.' })
  }

  try {
    const booking = await createBooking({
      sessionId,
      start,
      client: {
        name: client.name.trim(),
        email: client.email.trim(),
        phone: client.phone?.trim(),
        notes: client.notes?.trim(),
      },
    })

    return response.status(201).json({ booking })
  } catch (error) {
    return response.status(409).json({ error: error.message })
  }
}
