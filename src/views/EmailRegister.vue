<template>
  <!-- <header></header> -->
  <!-- <section id="register" onload="emailDuplCheck()"> -->
  <section id="register">
      <!-- <form method="POST" action="emailRegister"> -->
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
      <input type="password" name="email" id="userpwchk" placeholder="위와 같은 비밀번호를 입력해주세요." @blur="pwDuplCheck">
      <span class="badge badge-danger mt-1" v-if="duplPassword">비밀번호가 일치합니다.</span>
      <span class="badge badge-danger mt-1" v-if="notDuplPassword">비밀번호가 일치하지 않습니다.</span>
      <br>
      <label for="usernickname">닉네임</label>
      <input type="text" name="email" id="usernickname" placeholder="닉네임을 입력하세요." @blur="nicknameDuplCheck">
      <span class="badge badge-danger mt-1" v-if="passNickname">사용할 수 있는 닉네임입니다.</span>
      <span class="badge badge-danger mt-1" v-if="!availableNickname">이미 사용중인 닉네임입니다.</span>
      <br>
      <div style="height: 50px"></div>
      <input type="checkbox" v-model="selectAll" @click="select()" /> 모두 동의합니다.
      <br>
      <div v-for='option in options' class="checkbox" :key="option">
        <label>
          <input type="checkbox" :value="option.index" v-model="selected" @change='updateCheckall()'>{{ option.title }}
        </label>
        <textarea readonly :value="option.content" cols="30" rows="10"></textarea>
      </div>
      <div style="height: 50px"></div>
      <button @click="totalCheck">회원가입</button>
  </section>
  <!-- <footer></footer> -->
</template>
<script>
export default {
  name:'',

  components: {},

  data() {
    return {
      // 이용약관 동의 내용
        options: [
          {title: "DAMOA 이용약관 동의(필수)", content: "약관 내용 1", index: "CK01"},
          {title: "개인정보 수집 및 이용 동의(필수)", content: "약관 내용 2", index: "CK02"},
          {title: "위치정보 이용약관 동의(선택)", content: "약관 내용 3", index: "CK03"},
          {title: "프로모션 정보 수신 동의(선택)", content: "약관 내용 4", index: "CK04"}
        ],
        selected: [],
        selectAll: false,

        availableEmail: true,
        availableEmailForm: true,
        passEmail: false,
        availablePassword: true,
        passPassword: false,
        duplPassword: false,
        notDuplPassword: false,
        passNickname: false,
        availableNickname: true
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
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.options) {
          this.selected.push(this.options[i].index);
        }
      }
    },
    updateCheckall: function(){
      if(this.options.length == this.selected.length){
        this.selectAll = true;
      }else{
        this.selectAll = false;
      }
    },
    async emailDuplCheck() {
      // 이메일 검증 변수 초기화

      // 이메일 가져오기
      const userEmail = document.getElementById("useremail").value;

      this.availableEmail = true;
      this.passEmail = false;
      this.availableEmailForm = true;
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
          // const isDupl = true; // 중복인 경우
          const isDupl = false;// 중복이 아닌 경우
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
    pwCheck() {
      const userPassword = document.getElementById("userpw").value;
      this.passPassword = false;
      this.availablePassword = true;
      if (userPassword.length > 0) {
        this.availablePassword = true;
        // this.passEmail = false;
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
    },
    pwDuplCheck() {
      const pw1 = document.getElementById("userpw").value;
      const pw2 = document.getElementById("userpwchk").value;

      if (pw2.length == 0) {
        this.duplPassword = false;
        this.notDuplPassword = false;
      } else if (pw1 === pw2) {
        this.duplPassword = true;
        this.notDuplPassword = false;
      } else {
        this.duplPassword = false;
        this.notDuplPassword = true;
      }
    },
    async nicknameDuplCheck() {
      // 닉네임 가져오기
      const nickname = document.getElementById("usernickname").value;
      
      this.availableNickname = true;
      this.passNickname = false;
      if (nickname.length > 0) {
        this.availableNickname = true;
        this.passNickname = false;

        // 서버에서 체크하고 값을 받아오는 코드
        // ...

        // ...
        const isDupl = false; // 중복인 경우
        // const isDupl = false;// 중복이 아닌 경우
        // 중복인 경우
        if (isDupl) this.availableNickname = false;
        // 중복이 아닌 경우
        else this.availableNickname = true;
        this.passNickname = this.availableNickname
      }
    },
    totalCheck() {
      if (
        this.passEmail && this.passPassword &&
        this.duplPassword && this.passNickname &&
        this.selected.includes("CK01") && this.selected.includes("CK02")
        ) {
          // 이메일, 비밀번호,  닉네임, 약관동의
          const data = {
            email: document.getElementById("useremail").value,
            password: document.getElementById("userpw").value,
            nickname: document.getElementById("usernickname").value,
            agree: this.selected
          };
          // data.email = document.getElementById("useremail").value;
          // data.password = document.getElementById("userpw").value;
          // data.nickname = document.getElementById("usernickname").value;
          // data.agree = this.selected;
          console.log(data);
          // postman 테스트 해서
          // const response = await axios.post("url", data);

          // 성공

          // 실패
      }
    }
  }
}
</script>