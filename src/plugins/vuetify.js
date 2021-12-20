import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    breakpoint: {
      mobileBreakpoint: 'sm' // This is equivalent to a value of 960
    },
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#000",
        secondary: "#818383",
        accent: "#2178ff",
        background: "#393E46",
      },
      dark : true,
    },
  },
});
