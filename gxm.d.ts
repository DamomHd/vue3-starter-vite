/*
 * @Author: Damom
 * @Date: 2020-09-20 22:00:15
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-20 22:42:32
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $api: any;
    $mock: any;
    $configs: any;
    $Message: any;
  }
}