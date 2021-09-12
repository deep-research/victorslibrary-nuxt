const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/victorslibrary3/"
        }
      }
    : {};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Github Pages Deployment
  ...routerBase,
  // router: {
  //   base: '/'
  // },

  generate: {
    fallback: true,
    // fallback: '404.html'
  },

  dev: process.env.NODE_ENV !== 'production',

  // serverMiddleware: [
  //   '~/middleware/redirect.js'
  // ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Victor's Library",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/router-extras'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    runtime: true, // Support `$md()`
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: [
    //   'markdown-it-div',
    //   'markdown-it-attrs'
    // ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
