<template>
  <div>
    <router-view></router-view>
        <v-container class="notice-container">
      <div class="grid">
        <vs-row align="center">
          <vs-col w="2">
            <h2>Notice</h2>
          </vs-col>
          <vs-col offset="9" w="1">
            <vs-button
              circle
              size="small"
              :active="active == 0"
              @click="addNotice()"
              :style="{'font-weight':'bold','margin':'auto'}"
              color="#2D46B9"
            >
              +
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
      <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="(notice, index) in notice_view"
          :key="index"
        >
          <v-expansion-panel-header class="accodian-header">
            {{notice.title}}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="accodian-content">
            {{notice.content}}
            <p class="accodian-author">{{notice.author}}</p>
            <p class="accodian-date">{{notice.date}}</p>
            <vs-button
              circle
              flat
              color="#CD1818"
              :active="active == 0"
              @click="delNotice(notice.notice_id)"
              class="delete-btn"
            >
              삭제
            </vs-button>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length=notice_page
          circle
          color="#2D46B9"
        ></v-pagination>
      </div>
    </v-container>
          <v-container class="team-container">
      <h2>Team</h2>
        <div class="card-container">
            <vs-card v-bind:style="{'margin':'6px 6px'}">
              <template #title>
                <h3>김경석</h3>
              </template>
              <template #img>
                <img src="img/pic_ks.png" alt="">
              </template>
              <template #text>
                <p>
                  Front-end
                </p>
              </template>
              <template #interactions>
                <vs-button circle href="https://github.com/0xe82de" blank class="white icon">
                  <i class="bx"><img src="img/github.png" width="15px" height="15px"></i>
                </vs-button>
              </template>
            </vs-card>

            <vs-card v-bind:style="{'margin':'6px 6px'}">
              <template #title>
                <h3>김아현</h3>
              </template>
              <template #img>
                <img src="img/pic_ah.png" alt="">
              </template>
              <template #text>
                <p>
                  Back-end
                </p>
              </template>
              <template #interactions>
                <vs-button circle href="https://github.com/zlzzlzz2l" blank class="white icon">
                  <i class="bx"><img src="img/github.png" width="15px" height="15px"></i>
                </vs-button>
              </template>
            </vs-card>

            <vs-card v-bind:style="{'margin':'6px 6px'}">
              <template #title>
                <h3>박상근</h3>
              </template>
              <template #img>
                <img src="img/pic_sg.png" alt="">
              </template>
              <template #text>
                <p>
                  Back-end
                </p>
              </template>
              <template #interactions>
                <vs-button circle href="https://github.com/tkdrms568" blank class="white icon">
                  <i class="bx"><img src="img/github.png" width="15px" height="15px"></i>
                </vs-button>
              </template>
            </vs-card>
            <vs-card v-bind:style="{'margin':'6px 6px'}">
              <template #title>
                <h3>유지상</h3>
              </template>
              <template #img>
                <img src="img/pic_js.png" alt="">
              </template>
              <template #text>
                <p>
                  Front-end
                </p>
              </template>
              <template #interactions>
                <vs-button circle href="https://github.com/yjs1213" blank class="white icon">
                  <i class="bx"><img src="img/github.png" width="15px" height="15px"></i>
                </vs-button>
              </template>
            </vs-card>
        </div>
      </v-container>
  </div>
</template>
<script>
import http from "@/util/http-common.js";

export default {
  name: "DamoaFrontendNotice",
  data() {
    return { 
      page: 0,
      active: 0,
      notice_list: [],
      notice_list_value: "",
      notice_list_len: 0,
      notice_view: [],
      notice_page: 0,
      maxNoticeView: 7,
      add_notice: {
        title: '',
        content: ''
      },
      del_notice: {
        notice_id: ''
      }
    };
  },
  watch: {
    page(){
      // 기존 공지사항 리스트 초기화
      this.notice_view = [];

      // 공지사항의 갯수가 maxNoticeView보다 작을때
      if(this.notice_list_len < this.maxNoticeView + 1){
          this.notice_list.forEach(element => {
            this.notice_view.push(element);
          });
      }

      else {
        let maxCnt = 0

        // 보여줄 페이지의 갯수를 가져옴
        if (this.maxNoticeView * this.page > this.notice_list_len) maxCnt = this.notice_list_len % this.maxNoticeView;
        // maxNoticeView * page가 len과 같은 경우 maxNoticeView만큼 가져옴
        else maxCnt = this.maxNoticeView;
        for(let i = 0; i < maxCnt; i++){
          this.notice_view.push(this.notice_list[(this.page - 1) * this.maxNoticeView + i])
        }
      }
    }
  },
}