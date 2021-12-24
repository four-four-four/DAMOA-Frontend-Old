<template>
  <div>
    <div>
      <v-card to="detail">
        <v-img
          src="img/pic_main_banne1r.png"
          height="70px"
          gradient="to left, rgba(25,32,72,.5), rgba(25,32,72,.0)"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-btn color="#000000" to="#">개발자</v-btn>
            <v-btn color="#000000" to="#">애플</v-btn>
            <v-btn color="#000000" to="#">정치</v-btn>
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
              <v-col cols="12" md="6" lg="4" v-for="i in 6" :key="i">
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
                      to="/detail"
                      :style="{'backgroud-color':'white'}"
                    >
                      <v-img
                        src="https://imgnews.pstatic.net/image/018/2021/12/24/0005113306_001_20211224124901050.jpg?type=w647"
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
                          박근혜, 병원TV로 사면 확인 후 '담담'..."거처 알아보는 중" (전문)
                        </div>

                        <div class="heading-body-1 py-4">
                          박 전 대통령은 이날 오전 유 변호사와 병원 텔레비전에 나오는 뉴스 화면을 통해 사면을 확인한 것으로 전해졌다. 유 변호사는 박 전 대통령의 당시 반응에 대해 “담담했다”고 전했다.
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#292C6D" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2 author">이데일리 · 24 Dec 2021</div>
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
