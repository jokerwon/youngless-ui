import YlButton from './button'

const components = [
  YlButton
]

const install = (Vue, options = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  YlButton
}