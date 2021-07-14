export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
    //TAMBAHKAN CODE INI UNTUK MENAMBAHKAN EKSTERNAL JAVASCRIPT
    script: [
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      { src: "/js/sb-admin-2.min.js" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  
  //DAN LOAD FILE CSS DI DALAM ATTRIBUTE INI
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/sb-admin-2.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'data'},
          logout: { url: '/api/auth/logout', method: 'post'},
          user: { url: 'users/login', method: 'get', propertyName: 'data'}
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
  axios: {
    baseURL: 'http://tour_in.test/'
  },
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}