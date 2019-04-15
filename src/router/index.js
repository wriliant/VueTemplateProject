/*
 * @Author: wriliant 
 * @Date: 2019-04-11 11:24:17 
 * @Description:  项目路由
 * @Last Modified by: wriliant
 * @Last Modified time: 2019-04-11 11:42:37
 */


import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})
// 参考文件http://www.cnblogs.com/coolslider/p/7074609.html
