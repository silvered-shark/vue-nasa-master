// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.options.API = {
	URL: 'https://api.nasa.gov',
	KEY: 'vwpoAGmBGXmJ60sthtDsq8hvB6ZxX7T1bJwaJnAT'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
