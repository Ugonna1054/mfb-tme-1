import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./utils/bootstrap-vue/bootstrap-vue";
import "./utils/vue-mask/mask";
import "./utils/vue-toastr/toastr";
import "./utils/vee-validate/vee-validate";
import "./utils/chart/chart";
import "./utils/vue-datetime/datetime";
import "./utils/vue-numeric/numeric";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
