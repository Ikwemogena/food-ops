// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/device',
    [
      '@nuxtjs/eslint-module',
      {
        failOnError: true,
        lintOnStart: true
      }
    ],
    [
      'nuxt-lodash',
      {
        prefix: 'lodash',
        prefixSkip: false
      }
    ],
    ['@nuxtjs/tailwindcss', {}],
    // [
    //   '@nuxtjs/google-fonts',
    //   {
    //     families: {
    //       Satoshi: {
    //         wght: [300, 400, 500, 700, 800],
    //         ital: [300, 400, 500, 700, 800]
    //       }
    //     },
    //     display: 'swap',
    //     download: true
    //   }
    // ]
  ],

  css: [
    // Add the path to your global CSS file here
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  }

  // supabase: {
  // url: process.env.SUPABASE_URL,
  // key: process.env.SUPABASE_KEY,
  // redirectOptions: {
  //   login: '/login',
  //   callback: '/confirm',
  //   exclude: [],
  // }

  // }

  // supabase: {
  //   redirectOptions: {
  //     login: '/',
  //     callback: '/confirm'
  //   },
  // }

  // tailwindcss: {
  //   cssPath: '~/assets/css/main.css',
  //   configPath: 'tailwind.config',
  //   injectPosition: 'first',
  //   viewer: false
  // }
})
