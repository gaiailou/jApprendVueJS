import Vue from "vue";
import App from "./Hello.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
