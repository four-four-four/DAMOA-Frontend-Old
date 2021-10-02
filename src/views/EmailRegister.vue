<template>
  <!-- <header></header> -->
  <!-- <section id="register" onload="emailDuplCheck()"> -->
  <section id="register">
      <!-- <form method="POST" action="emailRegister"> -->
      <form method="POST" action="">
        <label for="useremail">이메일</label>
        <!-- <input type="email" name="" id="useremail"> -->
        <input type="email" name="" id="useremail" placeholder="이메일을 입력하세요." @blur="emailDuplCheck">
        <span class="badge badge-danger mt-1" v-if="!availableEmail">이미 사용중인 이메일입니다.</span>
        <span class="badge badge-danger mt-1" v-if="passEmail">사용할 수 있는 이메일입니다.</span>
        <span class="badge badge-danger mt-1" v-if="!availableEmailForm">이메일 형식이 다릅니다.</span>
        <br>
        <label for="userpw">비밀번호</label>
        <input type="password" name="" id="userpw" placeholder="숫자 , 알파벳(소문자, 대문자), 특수문자 중 두 가지 이상을 조합하여 8자리 이상 작성하세요." @blur="pwCheck">
        <span class="badge badge-danger mt-1" v-if="passPassword">올바른 비밀번호입니다.</span>
        <span class="badge badge-danger mt-1" v-if="!availablePassword">비밀번호 규칙에 맞게 입력해주세요.</span>
        <br>
        <label for="userpwchk">비밀번호 확인</label>
        <input type="password" name="email" id="userpwchk">
        <br>
        <label for="usernickname">닉네임</label>
        <input type="text" name="email" id="usernickname">
        <br>

        <input type="checkbox" name="totalagree" id="totalagree" v-on:click="totalCheck()">
        <label for="total">
          다모아 이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.
        </label>
        <article>
          <input type="checkbox" name="agree" id="service" class="agree" v-on:click="agreeCheck()">
          <label for="service">다모아 이용약관 동의(필수)</label>
          <br>
          <textarea name="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="private" class="agree" v-on:click="agreeCheck()">
          <label for="private">개인정보 수집 및 이용 동의(필수)</label>
          <br>
          <textarea name="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="position" class="agree" v-on:click="agreeCheck()">
          <label for="position">위치정보 이용왁간 동의(선택)</label>
          <br>
          <textarea name="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="promotion" class="agree" v-on:click="agreeCheck()">
          <label for="promotion">프로모션 정보 수신 동의(선택)</label>
          <br>
          <textarea name="" cols="30" rows="10">
            내용
          </textarea>
        </article>
      </form>
  </section>
  <!-- <footer></footer> -->
</template>
<script>
export default {
  name:'',

  components: {},

  data() {
    return {
        availableEmail: true,
        availableEmailForm: true,
        passEmail: false,
        availablePassword: true,
        passPassword: false
    };
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted(){},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}, 
  methods: {
    async emailDuplCheck() {
      // 이메일 검증 변수 초기화

      // 이메일 가져오기
      const userEmail = document.getElementById("useremail").value;

      if (userEmail.length > 0) {
        this.availableEmailForm = true;
        this.availableEmail = true;
        this.passEmail = false;
  
        // 정규식
        const reg_email = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
  
        // 이메일 형식이 맞으면
        if (reg_email.test(userEmail)) {
          // 서버에서 체크하고 값을 받아오는 코드
          // ...
  
          // ...
          const isDupl = true; // 중복인 경우
          // const isDupl = false;// 중복이 아닌 경우
          // 중복인 경우
          if (isDupl) this.availableEmail = false;
          // 중복이 아닌 경우
          else this.availableEmail = true;
          this.passEmail = this.availableEmail
        }
        // 이메일 형식이 안맞으면
        else {
          this.availableEmailForm = false;
        } 
      }
    },
    totalCheck() {
      const isTotalCheck = document.getElementById("totalagree").checked;
      const agrees = document.getElementsByClassName("agree");
      agrees.forEach(a => {
        a.checked = isTotalCheck;
      });
    },
    agreeCheck() {
      const agrees = document.getElementsByClassName("agree");
      let isTotalCheck = true;
      agrees.forEach(a => {
        if (!a.checked) {
          isTotalCheck = false;
          return false;
        }
      });
      document.getElementById("totalagree").checked = isTotalCheck;
    },
    pwCheck() {
      const userPassword = document.getElementById("userpw").value;

      if (userPassword.length > 0) {
        this.availablePassword = true;
        this.passEmail = false;
        const numIdx = userPassword.search(/[0-9]/g);
        const sEngIdx = userPassword.search(/[a-z]/g);
        const cEngIdx = userPassword.search(/[A-Z]/g)
        const speIdx = userPassword.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        let count = 0;
        if (numIdx < 0) --count;
        if (sEngIdx < 0) --count;
        if (cEngIdx < 0) --count;
        if (speIdx < 0) --count;

        if (count < -2 || userPassword.length < 8) this.availablePassword = false;
        else this.availablePassword = true;
        this.passPassword = this.availablePassword
      }
    }
  }
}
</script>