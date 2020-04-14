// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,500;0,900;1,700&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@1,200&display=swap'
  })

  head.script.push({
    src: 'https://kit.fontawesome.com/d4c67433a6.js',
    crossorigin: 'anonymous',
    body: true
  })

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'bg-red-900' }
}

