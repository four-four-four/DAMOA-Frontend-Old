<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4 white--text">Popular Posts</h3>

      <v-divider></v-divider>

      <div style="color: black">
        <v-row v-for="i in 5" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5" style="background-color: #EEF2FF; border-top-left-radius: 16px;border-bottom-left-radius: 16px">
            <v-card height="100%" flat>
              <v-img
                src="https://imgnews.pstatic.net/image/437/2021/12/24/0000284569_001_20211224111401637.jpg?type=w647"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col style="background-color: #EEF2FF; border-top-right-radius: 16px;border-bottom-right-radius: 16px">
            <div>
              <v-btn depressed color="#292C6D" small class="white--text">정치</v-btn>

              <h3 class="text-h6 font-weight-bold py-3">
                문 대통령 "박근혜 건강상태 고려 사면…통합·화합 계기되길"
              </h3>

              <div class="d-flex align-center">
                <v-avatar color="#292C6D" size="24">
                  <v-icon dark small>mdi-feather</v-icon>
                </v-avatar>

                <div class="pl-2">JTBC · 24 Dec 2021</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
