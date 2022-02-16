<template>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <router-view></router-view>
    
    <div class="chart-container">
        <h2>📈급상승 키워드</h2>
        <div class="rise-chart">
            <canvas id="riseChart"></canvas>
        </div>
        <div class="legend-container">
            <ul>
                <li v-for="keyword, i in rank" :key="keyword" @click="setKeyword(i)" :class="{current:i == current}">{{keyword}}</li>
            </ul>
        </div>
        <br>
    </div>
    <div class="grid-container">
        <div class="rank-container">
            <div class="rank-title">
                <h2>카테고리 별 키워드</h2>
            </div>
            <div class="rank-content">
                <canvas id="categoryChart"></canvas>
            </div>
        </div>
        <div class="rank-container">
            <div class="rank-title">
                <h2>월간 방문자 수</h2>
            </div>
            <div class="rank-content">
                <ul class="rank-list">
                    <canvas id="visitChart"></canvas>
                </ul>
            </div>
        </div>
    </div>
    <div style="height: 200px"></div>
  </div>
</template>
<script>
export default {
  name: "DamoaFrontendTrend",
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
}
