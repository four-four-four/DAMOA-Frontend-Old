<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-card-title>회원 정보 수정</v-card-title>
      <v-card-text>
        <!-- email -->
        <v-row>
          <v-col cols="3" align-self="center">이메일</v-col>
          <v-col cols="9" align-self="center">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- password -->
        <v-row>
          <v-col cols="3" align-self="center">비밀번호</v-col>
          <v-col cols="9" align-self="center">
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- nickname -->
        <v-row>
          <v-col cols="3" align-self="center">닉네임</v-col>
          <v-col cols="9" align-self="center">
            <v-text-field
              v-model="nickname"
              label="Nickname"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- gender -->
        <v-row>
          <v-col cols="3" align-self="center">성별</v-col>
          <v-radio-group v-model="gender" column>
            <v-row>
              <v-col cols="6" align-self="center">
                <v-radio label="남자" value="남자"></v-radio>
              </v-col>
              <v-col cols="6" align-self="center">
                <v-radio label="여자" value="여자"></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
        </v-row>

        <!-- birthday -->
        <v-row>
          <v-col cols="3" align-self="center">생년월일</v-col>
          <v-col cols="3" align-self="center">
            <v-text-field v-model="year" label="연도" required></v-text-field>
          </v-col>
          <v-col cols="3" align-self="center">
            <v-text-field v-model="month" label="월" required></v-text-field>
          </v-col>
          <v-col cols="3" align-self="center">
            <v-text-field v-model="day" label="일" required></v-text-field>
          </v-col>
        </v-row>

        <!-- job -->
        <v-row align="cente">
          <v-col cols="3" align-self="center">직업</v-col>
          <v-col cols="9" align-self="center">
            <v-select
              v-model="job"
              :items="jobs"
              label="직업"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- button -->
      <v-card-actions>
        <v-btn class="ma-2" outlined color="indigo" @click="modify">
          수정하기</v-btn
        >
        <v-btn class="ma-2" outlined color="orange" @click="reset">
          취소하기</v-btn
        >
      </v-card-actions>
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
