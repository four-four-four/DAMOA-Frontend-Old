<template>
  <div>
    <router-view></router-view>
    <v-container class="keywords-container">
      <h2>키워드</h2>
      <div class="edit" @click="editKeywords()">
        <a class="edit-text">{{edit}}</a>
      </div>
        <div class="grid-container">
            <div class="keywords" v-for="(keyword, index) in keywords" :key="index" 
            :style="{
              'background-color': keywordsBackgroundColor[index], 
              'animation-delay': keywordsDelay[index],
              'animation-duration': keywordsDuration[index], 
              'animation-play-state': animation_state}">
              <span class="delete-badge" :style="{'display': delete_badge}" @click="deleteKeyword(keyword)">-</span>
              <p class="keyword">{{keyword}}</p>
            </div>
            <div class="add-keyword" :style="{'display': add_keyword}">
              <p class="add-keyword-text" @click="addKeyword()">+</p>
            </div>
        </div>
      </v-container>
  </div>
</template>
<script>

export default {
  name: "DamoaFrontendMypage",
  data() {
    return {
        keywords: ["정치", "코인", "경제", "IT", "자동차", "꽃", "바다", "우주", "핵", "사전", "증권", "부동산", "지도", "개발", "스프링", "도구", "스피커"],
        keywordsBackgroundColor: [],
        keywordsDelay: [],
        keywordsDuration: [],
        edit: "수정",
        delete_badge: "none",
        animation_state: "paused",
        add_keyword: "none",
    };
  },
  mounted() {
  },
  methods: {
    init() {
      for(var k = 0; k < this.keywords.length; k++){
        this.getRndValue()
      }
    },
    getRndValue(){
      var R, G, B, delay, duration;
      
      R = (Math.floor(Math.random() * 256));
      G = (Math.floor(Math.random() * 256));
      B = (Math.floor(Math.random() * 256));   
      delay = (Math.floor(Math.random() * (60 - 20 + 1)) + 20);
      duration = (Math.floor(Math.random() * (80 - 20 + 1)) + 20);

      this.keywordsBackgroundColor.push('rgb(' + R + ',' + G + ',' + B + ')')
      this.keywordsDelay.push('-.' + delay + 's')
      this.keywordsDuration.push('.' + duration + 's')
    },
  },
}
</script>
<style scoped>
</style>