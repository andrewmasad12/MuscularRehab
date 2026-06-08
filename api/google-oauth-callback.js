const TOKEN_URL = 'https://oauth2.googleapis.com/token'

export default async function handler(request, response) {
  const { code, error } = request.query
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
  const redirectUri =
    process.env.GOOGLE_OAUTH_REDIRECT_URI ||
    `${request.headers['x-forwarded-proto'] || 'https'}://${request.headers.host}/api/google-oauth-callback`

  if (error) {
    return response.status(400).send(`Google OAuth error: ${error}`)
  }

  if (!code || !clientId || !clientSecret) {
    return response
      .status(400)
      .send('Missing OAuth code or Vercel env vars GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET.')
  }

  const tokenResponse = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  })
  const tokenData = await tokenResponse.json()

  if (!tokenResponse.ok) {
    return response.status(400).json(tokenData)
  }

  return response.status(200).send(`
    <main style="font-family: system-ui, sans-serif; max-width: 720px; margin: 48px auto; line-height: 1.6;">
      <h1>Google Calendar connected</h1>
      <p>Copy this refresh token into Vercel as <strong>GOOGLE_OAUTH_REFRESH_TOKEN</strong>. Treat it like a password.</p>
      <textarea readonly style="width: 100%; min-height: 160px; padding: 16px;">${tokenData.refresh_token || 'No refresh_token returned. Remove app access from your Google Account and run the flow again.'}</textarea>
      <p>Also set <strong>GOOGLE_CALENDAR_ID</strong> to your calendar email, then redeploy.</p>
    </main>
  `)
}
