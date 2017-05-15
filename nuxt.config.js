const NuxtHelpers = require('nuxt-helpers');

module.exports = NuxtHelpers(['optimize', 'offline', 'manifest'], {
  head: {
    title: 'Pizza Au Feu De Bois - LANNEMEZAN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Commandez par téléphone vos pizzas, plaques et desserts à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Pizzas à emporter, à partir de 4.00€.' },
      { name: 'og:title', content: 'Pizza Au Feu De Bois - LANNEMEZAN' },
      { name: 'og:description', content: 'Commandez par téléphone vos pizzas, plaques et desserts à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Pizzas à emporter, à partir de 4.00€.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://pizza-lannemezan.fr' },
      { name: 'og:image', content: 'https://i.imgur.com/GXCLuc5.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  plugins: ['~/plugins/flexboxgrid.js', { src: '~plugins/ga.js', ssr: false }],
  loading: { color: '#fff' },
  manifest: {
    name: 'Nuxt.js',
    theme_color: '#3B8070'
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
})
