import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuesax from "vuesax";
import AsyncComputed from "vue-async-computed";

import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;
Vue.use(Vuesax, {
  // options here
});
Vue.use(VueSweetalert2);
new Vue({
  vuetify,
  router,
  Vuesax,
  VueSweetalert2,
  AsyncComputed,
  render: (h) => h(App),
}).$mount("#app");
