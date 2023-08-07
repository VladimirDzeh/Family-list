import Vue from "vue";
import store from "@/store/store";
import App from "@/App.vue";
import router from "@/router/index";
import "@/scss/index.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
