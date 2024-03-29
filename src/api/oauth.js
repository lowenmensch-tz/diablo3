import { post } from 'axios'

const clientId = '26f746c4b4464e9193fb478c7019a1eb'
const clientSecret = 'eB8vIFBwdWFtT80AsyGvpV4CSSVpALrY'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
