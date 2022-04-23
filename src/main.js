import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuesax from "vuesax";
import AsyncComputed from "vue-async-computed";
import store from "./store";

import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.config.productionTip = false;
Vue.use(Vuesax, {
  // options here
});
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueSweetalert2);
new Vue({
  vuetify,
  router,
  Vuesax,
  VueSweetalert2,
  AsyncComputed,
  store,
  render: (h) => h(App)
}).$mount("#app");
