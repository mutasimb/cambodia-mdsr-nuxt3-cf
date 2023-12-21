import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            'primary-900': '#0D5E4A',
            'primary-700': '#179778',
            'secondary-700': '#CEF003',
            'neutral-300': '#E1E6EF',
            'neutral-200': '#F1F3F9',
            'neutral-100': '#F8F9FC',
            'primary-neutral-900': '#192252',
            'primary-black': '#1D2433',
            'secondary-black': '#1D2433',
            'disabled-black': '#818EA2'
          }
        }
      }
    }
  });

  app.vueApp.use(vuetify);
})
