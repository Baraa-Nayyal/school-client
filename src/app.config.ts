const isLocal = ref(false)

const HOST_DOMAIN = isLocal.value ? 'http://localhost:3000' : 'https://afak-server.vercel.app'

const API_URL = `${HOST_DOMAIN}/`

export { API_URL, HOST_DOMAIN }
