<template>
  <div>
    <h3 align="center">Sign Up</h3>
    <email-sign-up />
  </div>
</template>

<script>
import EmailSignUp from "@/components/user/signup/child/EmailSignUp.vue";

export default {
  name: "Signup",
  components: {
    EmailSignUp,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
