import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuesax from "vuesax";
import AsyncComputed from "vue-async-computed";

import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";

Vue.config.productionTip = false;
Vue.use(Vuesax, {
  // options here
});
new Vue({
  vuetify,
  router,
  Vuesax,
  AsyncComputed,
  render: (h) => h(App),
}).$mount("#app");
