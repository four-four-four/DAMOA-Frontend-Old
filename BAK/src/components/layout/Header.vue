<template>
  <header id="main_header">
    <nav class="navbar">
      <div id="title">
        <a href="#">DAMOA</a>
      </div>

      <div id="menu">
        <ul>
          <!-- 메인 화면 버튼 -->
          <span id="mainBtn">
              <li><a href="#">Main</a></li>
            </span>

          <!-- 로그인 상태 메뉴 -->
          <span id="login-menu">
              <li><a href="#">My Keyword</a></li>
              <li><a href="#">My Page</a></li>
              <li><a href="#">Logout</a></li>
            </span>

          <!-- 로그아웃 상태 메뉴 -->
          <span id="logout-menu">
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign in</a></li>
            </span>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
    mounted() {
      const USER_INFO = "userInfo";
      const loginMenu = document.querySelector("#login-menu");
      const logoutMenu = document.querySelector("#logout-menu");

      const HIDDEN_CLASS = "hidden"

      if (localStorage.getItem(USER_INFO)) {
        loginMenu.classList.remove(HIDDEN_CLASS);
        logoutMenu.classList.add(HIDDEN_CLASS);
      } else {
        logoutMenu.classList.remove(HIDDEN_CLASS);
        loginMenu.classList.add(HIDDEN_CLASS);
      }
    }
}
</script>

<style>
  @import '../../assets/css/header.css';
</style>
