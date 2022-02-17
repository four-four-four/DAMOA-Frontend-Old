<template>
  <div>
    <div>
      <v-card>
        <v-img
          height="70px"
          :style="{'background-color': '#FF3CAC', 'background-image': 'linear-gradient(220deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'}"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-btn color="#000000" to="/">개발자</v-btn>
            <v-btn color="#000000" to="/">애플</v-btn>
            <v-btn color="#000000" to="/">정치</v-btn>
          </v-card-text>
        </v-img>
      </v-card>
    </div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-9">
            <h2 class="text-h4 font-weight-bold pb-4 white--text">Today</h2>

            <v-row>
              <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=001&oid=005&aid=0001506093"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/005/2022/02/17/2022021712093411725_1645067374_0016781451_20220217123402431.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">정치</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          우린 언제·몇명되야 정점? “3월 중순 예상, 27만명쯤”
                        </div>

                        <div class="heading-body-1 py-4">
                          오미크론 변이 확산으로 코로나19 신규 확진자수가 순식간에 9만명대에 올라서는 등 급증하는 가운데 국내 확산 정점이 다음달 중순쯤 올 것이라는 전망이 나왔다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">국민일보 · 17 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
                            <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://n.news.naver.com/article/243/0000022963"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/243/2022/02/17/0000022963_001_20220217110001956.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">생활</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          안전벨트 경고음 미작동 등으로 테슬라 3만3000대 리콜
                        </div>

                        <div class="heading-body-1 py-4">
                          테슬라·아우디 등 수입차량 3만8000여대에 제작 결함 시정조치(리콜)가 이뤄진다. 성에 제거 제어장치의 소프트웨어 오류로 전면 유리의 성에가 정상적으로 제거되지 않는 안전기준 부적합 사항도 있었다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">이코노미스트 · 17 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
                            <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://n.news.naver.com/article/003/0011009570"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/003/2022/02/17/NISI20220204_0018405833_web_20220204145054_20220217113607158.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">생활</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          정부, 내일 거리두기 발표…"방역패스·적용기간 종합 검토"
                        </div>

                        <div class="heading-body-1 py-4">
                          대통령 선거일인 3월9일까지 사회적 거리두기를 적용할 계획이 있느냐는 질의에 "거리두기의 기간도 논의 사항"이라며 "거리두기 조정 내용과 함께 기간에 대해서도 종합적으로 검토 중"이라고 답했다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">뉴시스 · 17 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
                            <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://n.news.naver.com/article/003/0011009584"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/003/2022/02/17/NISI20220215_0018475281_web_20220215131637_20220217122905633.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">정치</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          "국회의원 정신교육대로"…대선 군소후보들 '이색 공약'
                        </div>

                        <div class="heading-body-1 py-4">
                          허경영 국가혁명당 후보는 매월 150만 원씩 전 국민에 국민배당금을 지급하겠다고 했다. 대신 국민연금은 폐지하기로 했다. 현재 러시아 영토인 연해주에 ‘코리아 자치주’를 건설하겠다고도 공약했다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">뉴시스 · 17 Feb 2021</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
                            <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=001&oid=052&aid=0001703097"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/052/2022/02/17/202202171256315294_t_20220217125918317.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">정치</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          '베를린의 남자' 홍상수...베를린 영화제 네 번째 은곰상
                        </div>

                        <div class="heading-body-1 py-4">
                          홍상수 감독이 베를린 국제영화제에서 또 한 번 수상했습니다. 심사위원대상 은곰상을 받았는데, 3년 연속 수상에다 감독상과 각본상 등에 이은 네 번째 은곰상을 거머쥐었습니다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">YTN · 17 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
                            <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? '#CDDEFF' : '#EEF2FF'"
                      :elevation="hover ? 5 : 0"
                      hover
                      href="https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=001&oid=052&aid=0001703094"
                      target="_blank"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/032/2022/02/17/0003129028_001_20220217130901163.jpg?type=w647"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#292C6D" to="category" class="white--text">경제</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="heading-h5 font-weight-bold">
                          아이스크림값 똑같다 했더니...'가격 담합' 롯데·빙그레·해태 과징금 1,350억
                        </div>

                        <div class="heading-body-1 py-4">
                          국내 아이스크림 시장의 85%를 차지하는 롯데와 빙그레, 해태가 4년 동안 서로 짜고 가격을 올려오다 1천억 원이 넘는 과징금을 물게 됐습니다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">YTN · 17 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
<style>
  .author {
    font-family: 'Noto Sans KR', sans-serif!important;
  }
  .heading-h5 {
    font-family: 'Noto Sans KR', sans-serif!important;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: normal;
  }
  .heading-body-1 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: normal;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .v-btn {
    margin-right: 15px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
  }
  .v-sheet.v-card:not(.v-sheet--outlined){
    border-radius: 16px;
    box-shadow: 1px 1px 8px rgb(0 0 0 / 50%)
  }
  .v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
</style>