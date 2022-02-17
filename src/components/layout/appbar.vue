<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-list nav color="primary">
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      elevate-on-scroll
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
          align="center"
          justify="space-between"
          :no-gutters="!$vuetify.breakpoint.smAndUp"
        >
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.smAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="font-weight-bold text-h5 primary--text"
              :style="{'margin-right': '20px'}" 
              @click="$router.push('/')"
            >
            DAMOA
            </v-toolbar-title>
            <div  v-if="$vuetify.breakpoint.smAndUp">
            <v-btn 
              v-for="(item, i) in barItems"
              :key="i"
              text
              class="text-capitalize"
              :to="item.to"
              exact-active-class="accent--text"
              exact
              >{{ item.title }}</v-btn>
            </div>

          </v-col>

          <v-col class="text-right" v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              v-for="(item, i) in btnItems"
              :key="i"
              text
              class="text-capitalize"
              :to="item.to"
              exact-active-class="accent--text"
              exact
              >{{ item.title }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Trend",
        to: "/trend",
      }
    ],
    btnItems: [
      {
        title: "Sign In",
        to: "/user/signin"
      },
    ],
  }),
};
</script>
<style>
  .theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
    opacity: 1;
  }
  .v-application .accent--text {
    color: white!important;
  }
  .v-btn::before {
    background-color: #2666CF;
    border-radius: 14px;
  }
  .v-navigation-drawer__content {
    background-color: #2C3333!important;
  }
  .v-navigation-drawer .v-list:not(.v-select-list) {
    background-color: #2C3333!important;
  }
</style>
