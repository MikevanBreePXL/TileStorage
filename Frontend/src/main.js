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

const customizedDarkTheme = {
  colors: {
    background: '#242424',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#073077',
    'primary-darken-1': '#05255b',
    secondary: '#4086d1',
    'secondary-darken-1': '#386fb7',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    defaultTheme: 'customizedDarkTheme',
    theme: {
      themes: {
        customizedDarkTheme,
      },
      dark: true,
    },
  });

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
