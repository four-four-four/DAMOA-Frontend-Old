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
    };
  },
  mounted() {
  },
  methods: {
  },
}
</script>
<style scoped>
</style>