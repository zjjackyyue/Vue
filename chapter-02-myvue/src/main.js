// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //自动扫描路由里面的配置

import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementui);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
