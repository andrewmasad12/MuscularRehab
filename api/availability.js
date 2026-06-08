import { getAvailableSlots, getSession, isGoogleConfigured } from './_calendar.js'

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { date, sessionId } = request.query

  if (!date || !sessionId || !getSession(sessionId)) {
    return response.status(400).json({ error: 'A valid date and sessionId are required.' })
  }

  try {
    const slots = await getAvailableSlots({ date, sessionId })
    return response.status(200).json({
      slots,
      synced: isGoogleConfigured(),
      setupRequired: !isGoogleConfigured(),
    })
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
}
