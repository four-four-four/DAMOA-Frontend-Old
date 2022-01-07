import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import User from "@/views/User.vue";
import SignUp from "@/components/user/signup/SignUp.vue";
import EmailSignUp from "@/components/user/signup/child/EmailSignUp.vue";
import Notice from "@/components/user/notice/Notice.vue"
import Mypage from "@/components/user/mypage/Mypage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
            component: EmailSignUp,
          },
        ],
      },
      {
        path: "notice",
        name: "Notice",
        component: Notice,
      },
      {
        path: "mypage",
        name: "Mypage",
        component: Mypage,
      },
    ],
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/Category.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("@/views/Detail.vue"),
  },
  {
    path: "/authors",
    name: "Authors",
    component: () => import("@/views/Authors.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
