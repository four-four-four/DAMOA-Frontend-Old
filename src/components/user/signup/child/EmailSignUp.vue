<template>
  <div class="grid">
    <!-- email -->
    <vs-row justify="center">
      <div class="center content-inputs">
        <vs-input
          primary
          type="email"
          v-model="email"
          placeholder="이메일을 입력해주세요."
        >
          <template #icon>
            <i class="bx bx-user"></i>
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
    <vs-row justify="center">
      <vs-input
        primary
        type="password"
        v-model="pw"
        placeholder="비밀번호를 입력해주세요."
      >
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
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
    <vs-row justify="center">
      <vs-input
        primary
        type="password"
        v-model="rePw"
        placeholder="비밀번호를 다시 입력해주세요."
      >
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
        </template>
        <template v-if="validRePw == 1" #message-success>
          위 비밀번호화 일치합니다.
        </template>
        <template v-else-if="validRePw == -1 && rePw !== ''" #message-danger>
          위 비밀번호와 일치하지 않습니다.
        </template>
      </vs-input>
    </vs-row>

    <!-- nickname -->
    <vs-row justify="center">
      <vs-input
        primary
        type="text"
        v-model="nickname"
        placeholder="닉네임을 입력해주세요."
      >
        <template #icon>
          <i class="bx bx-smile"></i>
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

    <!-- terms agree -->
    <vs-row justify="center">
      <vs-checkbox success v-model="totalTerm" @change="checkTotalTerm">
        이용약관 전체 동의
      </vs-checkbox>
    </vs-row>
    <div v-for="(term, index) in terms" :key="index">
      <vs-row justify="center">
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
        <textarea
          style="border: 1px solid; font-size: 3px"
          readonly
          :value="term.content"
          cols="50"
          rows="3"
        />
      </vs-row>
    </div>
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

      // terms
      totalTerm: false,
      checkTerms: [],
      terms: [
        {
          title: "DAMOA 서비스 이용약관 동의 (필수)",
          content: "DAMOA 서비스 약관",
          code: "term01",
        },
        {
          title: "개인정보 수집 및 이용 동의 (필수)",
          content: "개인정보 수집 및 이용 약관",
          code: "term02",
        },
        {
          title: "위치정보 수집 및 이용 동의 (선택)",
          content: "위치정보 수집 및 이용 약관",
          code: "term03",
        },
        {
          title: "프로모션 정보 수신 동의 (선택)",
          content: "프로모션 정보 수신 약관",
          code: "term04",
        },
      ],

      // api
      api: "/user2",
    };
  },
  watch: {
    email() {
      const email = this.email;
      if (!email) this.validEmail = 0;
      else if (!this.regExpEmail.test(email)) this.validEmail = -1;
      else {
        http
          .get(`${this.api}/checkEmailDupl/${email}`)
          .then((response) => {
            if (response.data.data) this.validEmail = -2;
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
            .get(`${this.api}/checkNicknameDupl/${nickname}`)
            .then((response) => {
              if (response.data.data) this.validNickname = -4;
              else this.validNickname = 1;
            })
            .catch((error) => {
              console.log(error);
              alert(error);
              this.validNickname = 0;
            });
        }
      }
    },
  },
  methods: {},
};
</script>
