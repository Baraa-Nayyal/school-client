import App from '@/App.vue'
import '@/assets/styles/styles.scss'
import { registerPlugins } from '@core/utils/plugins'
import { createApp } from 'vue'
import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueApexCharts from 'vue3-apexcharts'

import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'

const app = createApp(App)
const options: PluginOptions = {
}
registerPlugins(app)
app.use(Toast, options)
app.component('VueApexCharts', VueApexCharts)

app.mount('#app')
