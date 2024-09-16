import './style.css'
import 'animate.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const customizedDarkTheme = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'customizedDarkTheme',
      themes: {
        customizedDarkTheme,
      },
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa
      },
    }
  });

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
library.add(far)
app.use(vuetify);

app.mount('#app');
