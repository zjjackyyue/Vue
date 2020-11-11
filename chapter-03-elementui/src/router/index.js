import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'


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
      component: Login,
    },
    {
      // 路由路径
      path: '/main',
      name: 'main',
      //跳转的组件
      component: Main,
      children: [
        {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile, props: true},
        {path: '/user/list', component: UserList}
      ]
    },
    {
      path: '/goLogin',
      //重定向的组件
      redirect: '/login'
    },
  ]
});
