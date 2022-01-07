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
    this.init();
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
    addKeyword(){
      this.$swal.fire({
        title: '추가할 키워드를 입력하세요.',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: '추가',
        showLoaderOnConfirm: true,
        preConfirm: (keyword) => {
          this.keywords.push(keyword)
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.getRndValue()
          this.$swal.fire('추가했어!', '', 'success')
        }
      })
    },
    deleteKeyword(keyword){
      this.$swal.fire({
        icon: 'warning',
        title: '진짜 \'' + keyword + '\' 키워드 삭제 할거야??',
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false, 
        denyButtonText: '응',
        cancelButtonText: '아니!!'
      }).then((result) => {
        if (result.isDenied) {
          const idx = this.keywords.findIndex(function(item) {return item === keyword})
          if (idx > -1) this.keywords.splice(idx, 1)
          if (idx > -1) this.keywordsBackgroundColor.splice(idx, 1)
          if (idx > -1) this.keywordsDelay.splice(idx, 1)
          if (idx > -1) this.keywordsDuration.splice(idx, 1)
          this.$swal.fire('삭제했어!', '', 'success')
        }
      })
    },
    editKeywords(){
      if (this.edit === '수정'){
        this.edit = '완료'
        this.delete_badge = 'inline-block'
        this.animation_state = 'running'
        this.add_keyword = 'inline-block'
      } else{
        this.edit = '수정'
        this.delete_badge = 'none'
        this.animation_state = 'paused'
        this.add_keyword = 'none'
      }
    },
  },
}
</script>
<style scoped>
  h2{
    margin-left: 10px;
    font-size: 40px;
    margin-bottom: 5px;
    color: #2C272E;
  }
  .edit {
    margin: auto;
    text-align: right;
    max-width: 850px;
    height: 30px;
  }
  .edit-text {
    color: #1C6DD0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 17px;
  }
  .add-keyword {
    position:relative;
    text-align: center;
    width: 70px; 
    height: 70px; 
    border-radius: 30px;
    background-color: #CCD1E4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
    border: 2px solid rgba(49, 49, 49, 0.178);
  }
  .add-keyword-text {
    margin-top: 2px;
    color: white;
    margin-bottom: 0px!important;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 40px;
    font-weight: 500;
  }
  .keyword {
    color: white;
    mix-blend-mode: difference;
    margin-bottom: 0px!important;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
  }
  .delete-badge{
    position: absolute;
    right: -10px;
    top: -10px;
    background:#CCD1E4;
    border: 2px solid rgba(49, 49, 49, 0.178);
    text-align: center;
    border-radius: 30px;
    color: white;
    padding: 2px 10px;
    font-size: 15px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800;
    cursor: pointer;
  }
  .keywords {
    position:relative;
    text-align: center;
    width: 70px; 
    height: 70px; 
    border-radius: 30px;
    border: 2px solid rgba(49, 49, 49, 0.178);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .keywords:nth-child(2n) {
    animation-name: odd_keyframe;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
  }
  .keywords:nth-child(2n-1) {
    animation-name: even_keyframe;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
  }
  .keywords-container {
    box-shadow: 2px 1px 8px rgb(11 26 50 / 80%);
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-top: 20px;
    background-color: #F9F9F9 !important;
    border-radius: 10px;
  }
  .grid-container {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    margin: auto;
    max-width: 900px;
    justify-content: center;
    align-content: center;
  }
</style>