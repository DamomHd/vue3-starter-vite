/*
 * @Author: Damom
 * @Date: 2020-09-20 19:51:13
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-20 22:25:28
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
