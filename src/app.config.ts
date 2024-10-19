const isLocal = ref(true)

const HOST_DOMAIN = isLocal ? 'http://localhost:3000' : 'http://194.df32.76.82:50333330'

const API_URL = `${HOST_DOMAIN}/`

export { API_URL, HOST_DOMAIN }
