<template>
  <v-app>
    <AppBar></AppBar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
  },
  data: () => ({}),
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>
