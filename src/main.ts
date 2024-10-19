import App from '@/App.vue'
import '@/assets/styles/styles.scss'
import { registerPlugins } from '@core/utils/plugins'
import { createApp } from 'vue'
import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'

// Create vue app
const app = createApp(App)
const options: PluginOptions = {
  // Customize your toast options here
}
// Register plugins
registerPlugins(app)
app.use(Toast, options)

// Mount vue app
app.mount('#app')
