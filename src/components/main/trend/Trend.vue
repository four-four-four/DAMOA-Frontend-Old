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
import Chart from "chart.js";
export default {
  name: "DamoaFrontendTrend",
  data() {
    return {
        rank: ["1위 보쌈", "2위 빅맥", "3위 짜장면", "4위 피자", "5위 치킨"],
        current: 0,
        riseChart: undefined,
        categoryChart: undefined,
        visitChart: undefined,
        hours: [],
    };
  },
  mounted() {
      this.calcHours()
      this.drawRiseChart([1, 2, 3, 5, 6, 130])
      this.drawCategoryChart()
      this.drawVisitChart()
  },
  methods: {
      setKeyword(i){
        this.current = i;
        var data = [0, 0, 0, 0, 0, 0];
        var initNum =  (Math.floor(Math.random() * 10));

        data[0] = initNum;
        for (let i = 0; i < 5; i++){
            let ran = (Math.floor(Math.random() * 65));
            data[i+1] = data[i] + ran; 
        }
        this.drawRiseChart(data);
      },
      calcHours(){
        const date = new Date(Date.now());
        const hour = date.getHours();
        const day = date.getDate() - 1;

        for (let i = 0; i < 6; i++){
            if (hour - (6 - i) < 1){
                this.hours.push(day + '일' + 24 + (hour - (6 - i)) + '시');
            }
            else {
                this.hours.push(hour - (6 - i) + '시');
            }
        }
        console.log(this.hours);
      },
      drawRiseChart(keyword){
          var ctx = document.getElementById('riseChart').getContext('2d');
            if (this.riseChart !== undefined) {
                this.riseChart.destroy();
            }
            this.riseChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.hours,
                    datasets: [{
                        label: '시간별 등록 횟수',
                        data: keyword,
                        backgroundColor: [
                            'rgba(23,39,116, 0.1)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 0, 117, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
      },
      drawCategoryChart(){
            var ctx = document.getElementById('categoryChart').getContext('2d');
            if (this.categoryChart !== undefined) {
                this.categoryChart.destroy();
            }
            this.categoryChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['IT', '스포츠', '정치', '경제', '연예', '자동차'],
                    datasets: [{
                        label: '누적 등록 횟수',
                        data: [142, 110, 85, 90, 50, 122],
                        backgroundColor: [
                            'rgba(23,39,116, 0.1)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(10, 25, 49, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 0, 117, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(10, 25, 49, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                    options: {
                        scale: {
                            angleLines: {
                                display: false
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    }
            });
      },
      drawVisitChart(){
          var ctx = document.getElementById('visitChart').getContext('2d');
            if (this.visitChart !== undefined) {
                this.visitChart.destroy();
            }
            this.visitChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['21년 8월','21년 9월','21년 10월','21년 11월','21년 12월','22년 1월'],
                    datasets: [{
                        label: '방문자 수',
                        data: [66, 99, 50, 120, 240, 520],
                        backgroundColor: [
                            'rgba(23,39,116, 0.1)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 0, 117, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
      },
  },
}
</script>
<style scoped>
h2 {
	padding-top: 10px;
    text-align: center;
	font-size: 40px;
	margin-bottom: -5px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #181D31;
}

ul {
	list-style: none;
}
.current {
	font-weight: 600;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 25px;
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%, #FFE162 40%);
	text-decoration: none;
}
.rise-chart {
    padding: 30px 60px;
}
.rank-list {
	margin-left: 30px; 
	margin-right: 30px;
    padding: 20px 10px;
}
.rank-keyword {
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 24px;
	font-weight: 400;
}
.rank-content {
	margin-top: 10px;
	background-color: #eeeeee;
	border-radius: 10px;
	margin: 10px 15px;
	padding: 20px 0px;
}
.rank-container {
	box-shadow: 2px 1px 8px rgb(11 26 50 / 80%);
	font-family: 'IBM Plex Sans KR', sans-serif;
	background-color: #396EB0 !important;
	border-radius: 10px;
}
.grid-container {
	display: grid;
	grid-gap: 1rem;
	margin: auto;
	max-width: 1600px;
	justify-content: center;
	align-content: center;
	margin-bottom: 15px;
}
.legend-container {
	padding: 30px 50px 30px 50px;
    margin: 30px 60px;
    background-color: #F7F7F7;
    border-radius: 20px;
}
.chart-container {
	margin: auto;
	max-width: 1600px;
	margin-bottom: 15px;
	border-radius: 10px;
	background-color: #eeeeee;
}
.rank-title h2 {
	font-size: 30px;
	margin-bottom: 5px;
	color: #eeeeee;
	font-weight: 500;
	font-family: 'Noto Sans KR', sans-serif;
}
.rank-title {
	margin-left: 20px;
	margin-right: 20px;
	text-align: center;
}

@media (max-width: 600px) {
    h2 {
        font-size: 20px;
    }
    .legend-container {
        margin: 2px 12px;
        padding: 12px 15px;
    }
    .rise-chart {
        margin-top: 20px;
        padding: 0 0;
    }
    .current { 
        font-size: 20px;
    }
}

@media (min-width: 1100px) {
	.grid-container {
		grid-template-columns: repeat(1, 1fr);
	}
}

@media (min-width: 1903px) {
	.grid-container {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>