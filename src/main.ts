import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { ElCard, ElImage, ElButton } from 'element-plus'

import './styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$ELEMENT = {
  useSource: true,
}
app.use(ElCard, ElImage, ElButton)

app.mount('#app')