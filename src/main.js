import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入全局样式 方式一
import "./style/index.scss";

// 使用ElementUI组件库
import ElementUI from "element-ui";
// 全部引入
import "element-ui/lib/theme-chalk/index.css";
// 使用组件库
Vue.use(ElementUI);

// 使用全局过滤器
import "./filters/idnex"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
