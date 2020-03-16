require('dotenv').config();
const {ONESIGNAL_APP_ID} = process.env;
const {ONESIGNAL_API_KEY} = process.env;

module.exports = {

  env: {
    ONESIGNAL_APP_ID,
    ONESIGNAL_API_KEY,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"},
    ],
  },
  //
  // router: {
  //   base: '/nuxtjs_portfolio/'
  // },
  //
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: '~/plugins/vue-smoothscroll', mode: 'client' },
    { src: '~/plugins/TweenMax.min.js', mode: 'client' },
  ],
  //
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/onesignal',
    '@nuxtjs/axios'
  ],
  manifest: {
    name: "Portfolio",
    lang: 'ja',
  },
  workbox: {
    dev: true,
  },
  oneSignal: {
    init: {
      appId: '45b9adbb-0ded-48d7-b579-10d7e736f329',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    },
    importScripts: ['sw.js'],
  },
  //

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}

