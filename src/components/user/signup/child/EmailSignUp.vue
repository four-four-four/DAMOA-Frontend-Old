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

    <br />
    <br />
    <br />
    <div class="center content-inputs">
      <vs-input
        label="비밀번호 재확인"
        type="password"
        v-model="rePw"
        v-on:blur="chkRePw"
        placeholder="비밀번호를 다시 입력해주세요."
      />
      <span v-bind:class="chkRePwResult ? 'true' : 'false'">{{
        chkMsgRePw
      }}</span>
    </div>
    <!-- nickname -->
    <div class="center content-inputs">
      <vs-input
        label="닉네임"
        type="text"
        v-model="nickname"
        v-on:blur="chkNickname"
        placeholder="닉네임을 입력해주세요."
      />
      <span v-bind:class="chkNicknameResult ? 'true' : 'false'">{{
        chkMsgNickname
      }}</span>
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
      // chkMsgEmail: "",
      regExpEmail: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      // chkEmailResult: false,

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
            this.validEmail = -1;
          });
      }
    },
  },
  methods: {
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
