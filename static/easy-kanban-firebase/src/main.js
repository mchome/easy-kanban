// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '@/fonts/material-design-icons/material-icons.css'
import 'dragscroll'
import 'google-material-color/dist/palette.js'
import 'google-material-color/dist/palette.styl'

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
