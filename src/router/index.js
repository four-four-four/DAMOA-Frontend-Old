import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import User from "@/views/User.vue";
import SignUp from "@/components/user/signup/SignUp.vue";
import EmailSignUp from "@/components/user/signup/child/EmailSignUp.vue";
import SignIn from "@/components/user/signin/SignIn.vue";

import Notice from "@/components/user/notice/Notice.vue";
import Keyword from "@/components/user/mypage/Keyword.vue";
import Mypage from "@/components/user/mypage/Mypage.vue";

import Trend from "@/components/main/trend/Trend.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      {
        path: "signup",
        name: "SignUp",
        component: SignUp,
        children: [
          {
            path: "email",
            name: "EmailSignUp",
            component: EmailSignUp
          }
        ]
      },
      {
        path: "signin",
        name: "SignIn",
        component: SignIn
      },
      {
        path: "notice",
        name: "Notice",
        component: Notice
      },
      {
        path: "mypage",
        name: "Mypage",
        component: Mypage
      },
      {
        path: "keyword",
        name: "Keyword",
        component: Keyword
      }
    ]
  },
  {
    path: "/trend",
    name: "Trend",
    component: Trend
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

export default router;
