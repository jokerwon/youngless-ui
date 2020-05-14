import YlButton from './src/Button.vue'

YlButton.install = Vue => {
  Vue.component(YlButton.name, YlButton)
}

export default YlButton