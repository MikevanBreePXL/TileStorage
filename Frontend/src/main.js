import './style.css'
import 'animate.css'


import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify, useTheme } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
  })  

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify, {
    theme: {
        primary: '#073077',
        secondary: '#499ddd',
        accent: '#eeeeee',
    }
})
app.mount('#app')
