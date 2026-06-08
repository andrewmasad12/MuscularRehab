const CALENDAR_SCOPE = 'https://www.googleapis.com/auth/calendar'

export default function handler(request, response) {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const redirectUri =
    process.env.GOOGLE_OAUTH_REDIRECT_URI ||
    `${request.headers['x-forwarded-proto'] || 'https'}://${request.headers.host}/api/google-oauth-callback`

  if (!clientId) {
    return response.status(500).send('Add GOOGLE_OAUTH_CLIENT_ID in Vercel before starting OAuth.')
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    scope: CALENDAR_SCOPE,
  })

  return response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`)
}
