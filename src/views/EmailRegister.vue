<template>
  <!-- <header></header> -->
  <section id="register">
      <!-- <form method="POST" action="emailRegister"> -->
      <form method="POST" action="">
        <label for="useremail">이메일</label>
        <input type="email" name="" id="useremail">
        <br>
        <label for="userpw">비밀번호</label>
        <input type="password" name="" id="userpw">
        <br>
        <label for="userpwchk">비밀번호 확인</label>
        <input type="password" name="email" id="userpwchk">
        <br>
        <label for="usernickname">닉네임</label>
        <input type="text" name="email" id="usernickname">
        <br>

        <input type="checkbox" name="totalAgree" id="total">
        <label for="total">
          다모아 이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.
        </label>
        <article>
          <input type="checkbox" name="agree" id="service">
          <label for="service">다모아 이용약관 동의(필수)</label>
          <br>
          <textarea name="" id="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="private">
          <label for="private">개인정보 수집 및 이용 동의(필수)</label>
          <br>
          <textarea name="" id="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="position">
          <label for="position">위치정보 이용왁간 동의(선택)</label>
          <br>
          <textarea name="" id="" cols="30" rows="10">
            내용
          </textarea>
        </article>
        <article>
          <input type="checkbox" name="agree" id="promotion">
          <label for="promotion">프로모션 정보 수신 동의(선택)</label>
          <br>
          <textarea name="" id="" cols="30" rows="10">
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
      sampleData: ''
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
  methods: {}
}
</script>