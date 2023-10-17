/** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui'
export default {
  content: [
    './components/*/.{js,vue,ts}',
    './layouts/*/.vue',
    './pages/*/.vue',
    './plugins/*/.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#ffffff' // Change to your desired light background color
      }
    }
  },
  // plugins: [daisyui]
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        hello: {
          primary: '#0000',
          'primary-focus': '#0000',
          'primary-content': '#FFFFFF',
          secondary: '#F000B8',
          'secondary-focus': '#BD0091',
          'secondary-content': '#FFFFFF',
          accent: '#37CDBE',
          'accent-focus': '#2AA79B',
          'accent-content': '#FFFFFF',
          neutral: '#3D4451',
          'neutral-focus': '#2A2E37',
          'neutral-content': '#FFFFFF',
          'base-100': '#FFFFFF',
          blue: '#1C4ED8',
          'base-200': '#EAEBEE',
          'base-300': '#C9CDD5',
          'base-content': '#1F2937',
          info: '#2094F3',
          success: '#42BA96',
          warning: '#FF9900',
          error: '#D9534F'
        }
      }
    ],
    logs: false
  }
}
