/*
 * @Author: Damom
 * @Date: 2020-09-20 20:04:09
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-20 20:12:22
 * @Description: file content
 */
import {createRouter,createWebHistory} from 'vue-router'
import routes  from './routes'

export default createRouter({
    history:createWebHistory(),
    routes:routes
})