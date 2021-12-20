<template>
  <v-container>
    <v-card class="mx-auto" max-width="500" height="300" outlined>
      <v-row justify="center">
        <v-card-title>로그인</v-card-title>
      </v-row>
      <v-row justify="center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-row>

          <v-row justify="center">
            <v-text-field
              v-model="password"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              class="input-group--focused"
              @click:append="show3 = !show3"
            ></v-text-field>
          </v-row>

          <v-row justify="center">
            <v-btn
              block
              class="ma-2"
              color="orange"
              outlined
              @click="$router.push({ name: 'SignUp' })"
            >
              이메일로 회원가입하기
            </v-btn>
          </v-row>
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
