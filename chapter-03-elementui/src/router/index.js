import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

// 显式声明你要用vue-router
Vue.use(VueRouter);

// 配置导出路由
export default new VueRouter({
  routes: [
    {
      // 路由路径 @RequestMapping
      path: '/login',
      name: 'login',
      //跳转的组件
      component: Login
    },
    {
      // 路由路径
      path: '/main',
      name: 'main',
      //跳转的组件
      component: Main
    }
  ]
});
