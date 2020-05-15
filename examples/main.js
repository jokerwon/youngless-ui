import Vue from 'vue'
import App from './App.vue'
import YounglessUI from '../packages/index'
import '../packages/style/index.scss'

Vue.config.productionTip = false

Vue.use(YounglessUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
