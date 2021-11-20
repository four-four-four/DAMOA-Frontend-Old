<template>
  <div>
    <div v-for="(page, index) in pages" :key="index">
      <div v-on:click="moveSignInPage(page.link)">
        {{ page.kind }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          kind: "이메일로 가입하기.",
          link: "NormalRegister"
        },
        {
          kind: "네이버로 가입하기.",
          link: "http://www.naver.com", // "NaverRegister"
        },
        {
          kind: "이메일로 가입하기.",
          link: "http://www.kakao.com", // "KakaoRegister"
        },
        {
          kind: "이메일로 가입하기.",
          link: "http://www.google.com" // "GoogleRegister"
        }
      ]
    }
  },
  methods: {
    moveSignInPage(page) {
      location.href = page;
    }
  }
}
</script>