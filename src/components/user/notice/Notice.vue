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
  mounted() {
    this.getNotice();
  },

  methods: {
    getNotice(){
     
      http
        .get(`http://54.254.102.29:8080/api/user/notice/`)
        .then((response) => {
          let value = response.data;
          this.notice_list_value = JSON.parse(JSON.stringify(value));
          this.notice_list_len = this.notice_list_value.data.length;

          if (this.notice_list_len % this.maxNoticeView === 0) this.notice_page = this.notice_list_len / this.maxNoticeView
          else this.notice_page = parseInt(this.notice_list_len / this.maxNoticeView) + 1;
          
          for(let i = 0; i < this.notice_list_len; i++){
            this.notice_list.push(this.notice_list_value.data[i]);
          }
          this.page = 1;
      })
        .catch((error) => {
          console.log(error);
      });
    },

    delNotice(index){
      this.$swal.fire({
        icon: 'warning',
        title: '진짜 삭제 할거야??',
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false, 
        denyButtonText: '응',
        cancelButtonText: '아니!!'
      }).then((result) => {
        if (result.isDenied) {
          this.del_notice.notice_id = index
          console.log(JSON.stringify(this.del_notice))
          this.$swal.fire('삭제했어!', '', 'success')
        }
      })
    },
    addNotice(){
      this.$swal.fire({
        title: '공지사항 추가',
        html:
          '<div class="add-form">'+
          ' <input id="input-title" class="input-title" placeholder="제목" ref="qwe"><br>' +
          ' <textarea id="input-content" class="input-content" placeholder="내용">' +
          '',
        showCancelButton: true,
        confirmButtonText: '추가',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          // swal에선 v-model을 사용할 수 없음
          this.add_notice.title = document.getElementById("input-title").value
          this.add_notice.content = document.getElementById("input-content").value
          
          console.log(JSON.stringify(this.add_notice))

          this.$swal.fire('추가했어!', '', 'success')
        }
      })
    }
  },
}
</script>
<style>
  .vs-card__img{
    height: 180px!important;
  }
  .vs-card {
    margin: auto;
  }
  .swal2-popup {
    font-family: 'Noto Sans KR', sans-serif!important;
  }
  .swal2-styled.swal2-confirm {
    background-color: #2D46B9!important;
  }
  .add-form {
    margin: auto;
  }
  .input-title {
    width: 100%;
    height: 50px;
    padding: 12px;
    border-radius: 6px;
    border: 2px solid #d1d3d4;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .input-content {
    width: 100%;
    height: 200px;
    padding: 12px;
    border-radius: 6px;
    border: 2px solid #d1d3d4
  }
  .input-title:focus, .input-content:focus-visible {
    border: 2px solid #2D46B9!important
  }
</style>
<style scoped>
  .v-expansion-panel-header--active {
    background-color: #396EB0;
    color: #F7F7F7;
  }
  h2{
    margin-left: 10px;
    font-size: 40px;
    margin-bottom: 5px;
    color: #2C272E;
  }
  .delete-btn {
    font-weight: bold;
    margin-top: 20px;
  }
  .v-expansion-panels > *:last-child:hover {
    overflow: hidden;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: 0ms;
  }
  .accodian-header {
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: -1px;
    font-size: 20px;
    font-weight: 500;
  }
  .accodian-header:hover {
    background-color: #396EB0;
    color: #F7F7F7;
  }

  .accodian-content {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
    color: #2C272E;
  }
  .accodian-author {
    margin-top: 20px;
    font-weight: 600;
    margin-bottom: 1px;
  }
  .accodian-date {
    margin-top: 1px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 4px;
  }
  .notice-container {
    box-shadow: 2px 1px 8px rgb(11 26 50 / 80%);
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-top: 10px;
    background-color: #F9F9F9 !important;
    border-radius: 10px;
  }
  .team-container {
    box-shadow: 2px 1px 8px rgb(11 26 50 / 80%);
    font-family: 'IBM Plex Sans KR', sans-serif;
    margin-top: 20px;
    background-color: #F9F9F9 !important;
    border-radius: 10px;
  }
  .card-container {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: 1140px;
    margin: 0 auto;
  }
  
@media (min-width: 500px) {
    .card-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1100px) {
    .card-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1200px) {
    .card-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>