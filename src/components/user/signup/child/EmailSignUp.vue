<template>
  <div class="grid">
    <vs-card align="center">
      <template #title>
        <h3>이메일로 회원가입</h3>
      </template>
      <template #text>
        <!-- email -->
        <vs-row justify="center" style="margin-bottom: 20px">
          <div class="center content-inputs">
            <vs-input
              primary
              type="email"
              v-model="email"
              placeholder="이메일을 입력해주세요."
            >
              <template #icon>
                <i class="bx bx-user iconn"></i>
              </template>
              <template v-if="validEmail == 1" #message-success>
                사용 가능한 이메일입니다.
              </template>
              <template
                v-else-if="validEmail == -1 && email !== ''"
                #message-danger
              >
                이메일 형식이 올바르지 않습니다.
              </template>
              <template
                v-else-if="validEmail == -2 && email !== ''"
                #message-danger
              >
                이미 사용 중인 이메일입니다.
              </template>
            </vs-input>
          </div>
        </vs-row>
        <!-- password -->
        <vs-row justify="center" style="margin-bottom: 10px">
          <vs-input
            primary
            type="password"
            v-model="pw"
            placeholder="비밀번호를 입력해주세요."
          >
            <template #icon>
              <i class="bx bx-lock-open-alt iconn"></i>
            </template>
            <template v-if="validPw == 1" #message-success>
              사용 가능한 비밀번호입니다.
            </template>
            <template v-else-if="validPw == -1 && pw !== ''" #message-danger>
              8자 이상 20자 이하 입력해주세요.
            </template>
            <template v-else-if="validPw == -2 && pw !== ''" #message-danger>
              영대문자, 영소문자, 숫자, 특수문자 중 세 가지 이상 포함하여
              입력해주세요.
            </template>
          </vs-input>
        </vs-row>
        <!-- password check -->
        <vs-row justify="center" style="margin-bottom: 20px">
          <vs-input
            primary
            type="password"
            v-model="rePw"
            placeholder="비밀번호를 입력해주세요."
          >
            <template #icon>
              <i class="bx bx-lock-open-alt iconn"></i>
            </template>
            <template v-if="validRePw == 1" #message-success>
              위 비밀번호화 일치합니다.
            </template>
            <template
              v-else-if="validRePw == -1 && rePw !== ''"
              #message-danger
            >
              위 비밀번호와 일치하지 않습니다.
            </template>
          </vs-input>
        </vs-row>
        <!-- nickname -->
        <vs-row justify="center" style="margin-bottom: 20px">
          <vs-input
            primary
            type="text"
            v-model="nickname"
            placeholder="닉네임을 입력해주세요."
          >
            <template #icon>
              <i class="bx bx-smile iconn"></i>
            </template>
            <template v-if="validNickname == 1" #message-success>
              사용 가능한 닉네임입니다.
            </template>
            <template
              v-else-if="validNickname == -1 && nickname !== ''"
              #message-danger
            >
              4자 이상 10자 이하로 입력해주세요.
            </template>
            <template
              v-else-if="validNickname == -2 && nickname !== ''"
              #message-danger
            >
              특수문자를 사용할 수 없습니다.
            </template>
            <template
              v-else-if="validNickname == -3 && nickname !== ''"
              #message-danger
            >
              한글 자음 또는 모음을 사용할 수 없습니다.
            </template>
            <template
              v-else-if="validNickname == -4 && nickname !== ''"
              #message-danger
            >
              이미 사용중인 닉네임입니다.
            </template>
            <template
              v-else-if="validNickname == -5 && nickname !== ''"
              #message-danger
            >
            </template>
          </vs-input>
        </vs-row>
        <vs-row justify="center">
          <vs-select placeholder="직업을 선택해주세요." v-model="job">
            <vs-option
              v-for="(job, index) in jobs"
              :key="index"
              :label="job"
              :value="job"
            >
              {{ job }}
            </vs-option>
          </vs-select>
        </vs-row>
        <br />
        <vs-row justify="center">
          <vs-input type="date" v-model="birthDate" />
        </vs-row>
        <!-- birthdate
        <vs-row justify="center" :style="{'width': '300px'}">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="birthDate"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="birthDate"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </vs-row>
        -->
        <!-- gender -->
        <vs-row justify="center" style="margin-top: 20px">
          <vs-col w="2">
            <h4 style="text-align: left">성별</h4>
          </vs-col>
          <vs-col w="2">
            <vs-radio v-model="gender" val="male"> 남자 </vs-radio>
          </vs-col>
          <vs-col w="2">
            <vs-radio v-model="gender" val="female"> 여자 </vs-radio>
          </vs-col>
        </vs-row>
        <!-- terms agree -->
        <vs-row style="margin-left: 28px; margin-top: 30px">
          <vs-checkbox success v-model="totalTerm" @change="checkTotalTerm">
            <u>이용약관 전체 동의</u>
          </vs-checkbox>
        </vs-row>
        <div v-for="(term, index) in terms" :key="index">
          <vs-row style="margin-left: 28px">
            <vs-checkbox
              name="terms"
              success
              :val="term.code"
              @change="checkTerm"
              v-model="checkTerms"
            >
              {{ term.title }}
            </vs-checkbox>
          </vs-row>
          <vs-row justify="center">
            <textarea readonly :value="term.content" cols="50" rows="3" />
          </vs-row>
        </div>
        <br />

        <!-- register -->
        <vs-row justify="center">
          <vs-button block @click="register">
            <i class="bx bxs-paint-roll" style="margin-right: 5px"></i>
            <p style="font-size: 17px; color: white; opacity: 1">
              회원가입하기
            </p>
          </vs-button>
        </vs-row>
      </template>
    </vs-card>
  </div>
</template>
<script>
import http from "@/util/http-common.js";

export default {
  data() {
    return {
      // email
      email: "",
      validEmail: 0,
      regExpEmail: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,

      // password
      pw: "",
      validPw: 0,

      // password check
      rePw: "",
      validRePw: 0,

      // nickname
      nickname: "",
      validNickname: 0,

      // gender
      gender: null,

      // birthdate
      birthDate: null,
      menu: false,

      // job
      jobs: ["회사원", "학생", "자영업자", "전문직", "기타"],
      job: "",

      // terms
      totalTerm: false,
      checkTerms: [],
      terms: [
        {
          title: "DAMOA 서비스 이용약관 동의 (필수)",
          content: "DAMOA 서비스 약관",
          code: "term01"
        },
        {
          title: "개인정보 수집 및 이용 동의 (필수)",
          content: "개인정보 수집 및 이용 약관",
          code: "term02"
        }
      ],

      // api
      api: "/v1/members"
    };
  },
  watch: {
    email() {
      const email = this.email;
      if (!email) this.validEmail = 0;
      else if (!this.regExpEmail.test(email)) this.validEmail = -1;
      else {
        http
          .get(`${this.api}/email/${email}/exists`)
          .then((response) => {
            console.log(response);
            if (response.data.status !== 204) this.validEmail = -2;
            else this.validEmail = 1;
          })
          .catch((error) => {
            console.log(error);
            alert(error);
            this.validEmail = 0;
          });
      }
    },
    pw() {
      const pw = this.pw;
      if (!pw) this.validPw = 0;
      // 길이 제한 확인
      else if (!(8 <= pw.length && pw.length <= 20)) this.validPw = -1;
      else {
        // 영대문자, 영소문자, 숫자, 특수문자 체크
        const cEngCheck = pw.search(/[A-Z]/g);
        const sEngCheck = pw.search(/[a-z]/g);
        const numCheck = pw.search(/[0-9]/g);
        const speCheck = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        let patternCnt = 0;
        if (numCheck >= 0) ++patternCnt;
        if (sEngCheck >= 0) ++patternCnt;
        if (cEngCheck >= 0) ++patternCnt;
        if (speCheck >= 0) ++patternCnt;

        if (patternCnt >= 3) this.validPw = 1;
        else this.validPw = -2;
      }

      // 비밀번호 재입력 값 삭제
      this.rePw = "";
    },
    rePw() {
      const rePw = this.rePw;
      if (!rePw) this.validRePw = 0;
      else if (this.pw === this.rePw) this.validRePw = 1;
      else this.validRePw = -1;
    },
    nickname() {
      const nickname = this.nickname;
      if (!nickname) this.validNickname = 0;
      // 길이 제한
      else if (!(4 <= nickname.length && nickname.length <= 10))
        this.validNickname = -1;
      else {
        const speCheck = nickname.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        const koreanCheck = nickname.search(/[ㄱ-ㅎ|ㅏ-ㅣ]/gi);
        // 특수문자 확인
        if (speCheck > -1) this.validNickname = -2;
        // 한글 자음 모음 확인
        else if (koreanCheck > -1) this.validNickname = -3;
        else {
          // 중복 확인
          http
            .get(`${this.api}/nickname/${nickname}/exists`)
            .then((response) => {
              if (response.data.status !== 204) this.validNickname = -4;
              else this.validNickname = 1;
            })
            .catch((error) => {
              console.log(error);
              alert(error);
              this.validNickname = 0;
            });
        }
      }
    }
  },
  methods: {
    checkTotalTerm() {
      if (this.totalTerm) {
        this.checkTerms = [];
        this.terms.forEach((term) => {
          this.checkTerms.push(term.code);
        });
      } else {
        this.checkTerms = [];
      }
    },
    checkTerm() {
      this.totalTerm = this.checkTerms.length === this.terms.length;
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    register() {
      if (this.validEmail !== 1) {
        alert("이메일을 입력해주세요.");
        return;
      } else if (this.validPw !== 1) {
        alert("비밀번호를 입력해주세요.");
        return;
      } else if (this.validNickname !== 1) {
        alert("닉네임을 입력해주세요.");
        return;
      }

      if (
        this.checkTerms.indexOf("term01") < 0 ||
        this.checkTerms.indexOf("term02") < 0
      ) {
        alert("필수 약관을 동의해주세요.");
        return;
      }

      http
        .post(`${this.api}/email-register`, {
          email: this.email,
          password: this.pw,
          nickname: this.nickname,
          gender: this.gender,
          birthDate: this.birthDate,
          job: this.job,
          serviceTerm: true,
          privacyTerm: true
        })
        .then((response) => {
          if (response.data.status === 201) {
            alert("회원가입 성공!");
            this.$router.push({
              name: "Home"
            });
          }
          console.log(response);
        })
        .catch((error) => {
          alert("회원가입 실패!");
          console.log(error);
        });
    }
  }
};
</script>
<style>
textarea {
  background-color: #f4f7f8;
  border-radius: 15px;
  padding: 20px 20px;
  margin: 5px 20px;
}
.vs-card__title {
  margin-top: 10px !important;
}
.vs-card__title h3 {
  padding-top: 5px !important;
  padding-bottom: 10px !important;
  font-family: "IBM Plex Sans KR", sans-serif !important;
  font-weight: 600 !important;
  font-size: 22px !important;
  color: #2c3333 !important;
}
.vs-card {
  width: 600px !important;
  font-family: "IBM Plex Sans KR", sans-serif !important;
  font-weight: 600 !important;
  font-size: 26px !important;
  max-width: 500px !important;
}
.content-inputs {
  width: 300px !important;
}
.vs-input {
  width: 300px !important;
}
.vs-select {
  width: 300px !important;
}
.vs-select-content {
  max-width: 300px !important;
}
.iconn {
  color: #2c3333 !important;
}
</style>
