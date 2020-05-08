import Vue from 'vue'
import App from './App.vue'
import YuButton from './components/Button'

Vue.config.productionTip = false

Vue.component(YuButton.name, YuButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
