<template>
  <v-container>
    <v-card class="mx-auto" max-width="500" height="300" outlined>
      <v-row justify="center">
        <v-card-title>로그인</v-card-title>
      </v-row>
      <v-row justify="center">
        <v-form ref="form" v-model="valid" lazy-validation>
        </v-form>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",

  components: {},

  data() {
    return {
      sampleData: "",
    };
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>
