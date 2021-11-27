<template>
  <v-container>
    <v-form>
      <!-- email -->
      <div class="center content-inputs">
        <vs-input
          type="email"
          v-model="email"
          v-on:blur="chkEmail"
          placeholder="이메일을 입력해주세요."
        />
        <span v-bind:class="chkEmailResult ? 'true' : 'false'">{{
          chkMsgEmail
        }}</span>
      </div>
      <!-- password -->
      <div class="center content-inputs">
        <vs-input
          type="password"
          v-model="pw"
          v-on:blur="chkPw"
          placeholder="비밀번호를 입력해주세요."
        />
        <span v-bind:class="chkPwResult ? 'true' : 'false'">{{
          chkMsgPw
        }}</span>
      </div>
      <div class="center content-inputs">
        <vs-input
          type="password"
          v-model="rePw"
          v-on:blur="chkRePw"
          placeholder="위 비밀번호와 동일하게 입력해주세요."
        />
        <span v-bind:class="chkRePwResult ? 'true' : 'false'">{{
          chkMsgRePw
        }}</span>
      </div>
      <!-- nickname -->
      <div class="center content-inputs">
        <vs-input
          type="text"
          v-model="nickname"
          v-on:blur="chkNickname"
          placeholder="닉네임을 입력해주세요."
        />
        <span v-bind:class="chkNicknameResult ? 'true' : 'false'">{{
          chkMsgNickname
        }}</span>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import http from "@/util/http-common.js";

export default {
  data() {
    return {
      // email
      email: "",
      chkMsgEmail: "",
      regExpEmail:
        /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
      chkEmailResult: false,

      // password
      pw: "",
      chkMsgPw: "",
      chkPwResult: false,

      rePw: "",
      chkMsgRePw: "",
      chkRePwResult: false,

      // nickname
      nickname: "",
      chkMsgNickname: "",
      chkNicknameResult: false,

      // api
      api: "/user2",
    };
  },
  methods: {
    chkEmail() {
      const email = this.email;
      if (email.length === 0) {
        this.chkMsgEmail = "";
        return;
      } else if (this.regExpEmail.test(email)) {
        // 요구사항 03. 아이디 중복 검사

        http
          .get(`${this.api}/checkEmailDupl/${email}`)
          .then((response) => {
            const result = response.data.data;
            if (result) {
              this.chkMsgEmail = "이미 사용중인 이메일입니다.";
            } else {
              this.chkMsgEmail = "사용할 수 있는 이메일입니다.";
            }
            this.chkEmailResult = result;
          })
          .catch((error) => console.log(error));
      } else {
        this.chkMsgEmail = "이메일 형식에 맞게 입력해주세요.";
      }
    },
    chkPw() {
      const pw = this.pw;
      // 비밀번호 길이 검사
      this.samePw = "";
      this.checkSamePw = "";
      if (pw.length === 0) {
        this.chkMsgPw = "";
        return;
      }
      if (8 > pw.length || pw.length > 20) {
        this.chkMsgPw = "비밀번호는 8자 이상 20자 이하로 입력해주세요.";
        return;
      }

      /**
       * 비밀번호 패턴 검사
       * 영대문자, 영소문자, 숫자, 특수문자 중 3가지 이상 포함 필요
       */

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

      if (patternCnt >= 3) this.chkMsgPw = "사용하실 수 있는 비밀번호입니다.";
      else
        this.chkMsgPw =
          "비밀번호는 영대문자, 영소문자, 숫자, 특수문자 중 세 가지 이상 포함하여 입력해주세요.";
    },
    chkRePw() {
      if (this.chkRePw.length === 0) {
        this.chkMsgRePw = "";
      } else if (this.rePw !== this.pw) {
        this.chkRePwResult = true;
        this.chkMsgPw = "위 비밀번호와 동일한 비밀번호를 입력해주세요.";
      } else {
        this.chkRePwResult = false;
        this.chkMsgRePw = "위 비밀번호와 일치합니다.";
      }
    },
    chkNickname() {
      const nickname = this.nickname;
      if (nickname.length === 0) {
        this.chkMsgNickname = "";
        return;
      } else if (10 < nickname.length || nickname.length < 4) {
        this.chkMsgNickname = "닉네임은 4자 이상 10자 이하로 입력해주세요.";
        return;
      }

      // 요구사항 08. 별명 유효성 검사
      const speCheck = nickname.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
      const koreanCheck = nickname.search(/[ㄱ-ㅎ|ㅏ-ㅣ]/gi);
      if (speCheck > -1) {
        this.chkMsgNickname = "별명에 특수문자를 사용할 수 없습니다.";
      }
      // 한글 정규식
      else if (koreanCheck > -1) {
        this.chkMsgNickname =
          "별명에 한글 자음 또는 모음을 사용할 수 없습니다.";
      } else {
        // 요구사항 09. 별명 중복 검사
        http
          .get(`${this.api}/checkNicknameDupl/${nickname}`)
          .then((response) => {
            const result = response.data.data;
            if (result) {
              this.chkMsgNickname = "이미 사용중인 닉네임입니다.";
            } else {
              this.chkMsgNickname = "사용할 수 있는 닉네임입니다.";
            }
            this.chkNicknameResult = result;
          })
          .catch((error) => {
            console.log(error);
          });
        /*
        서버 통신 필요
        */
        this.chkMsgNickname = "사용하실 수 있는 별명입니다.";
      }
    },
  },
};
</script>
