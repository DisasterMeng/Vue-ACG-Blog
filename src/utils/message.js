// 注册全局提示消息

import messageComponent from '@/components/alert/index'

const messageVue = {
  install (Vue) {
    const MessageConstructor = Vue.extend(messageComponent)
    const instance = new MessageConstructor()
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    Vue.prototype.$message = (message, backgroundColor = '#29d', time = 5000) => {
      instance.message = message
      instance.visible = true
      instance.backgroundColor = backgroundColor
      if (document.timer) clearTimeout(document.timer)
      document.timer = setTimeout(() => { instance.visible = false }, time)
    }
  }
}

export default messageVue
