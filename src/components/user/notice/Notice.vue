<template>
  <div>
    <router-view></router-view>
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