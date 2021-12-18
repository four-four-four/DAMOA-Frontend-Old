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
  </div>
</template>
<script>

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
}