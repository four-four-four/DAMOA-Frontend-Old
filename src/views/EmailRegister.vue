<template>
  <section id="register">
      <label for="useremail">이메일</label>
      <input type="email" name="" id="useremail" placeholder="이메일을 입력하세요." @blur="emailDuplCheck">
      <span class="badge badge-danger mt-1" v-if="isEmailEmpty">{{alert_empty}}</span>
      <span class="badge badge-danger mt-1" v-else-if="!isEmailOk">이메일 형식이 다릅니다.</span>
      <span class="badge badge-danger mt-1" v-else-if="isEmailDupl">이미 사용중인 이메일입니다.</span>
      <span class="badge badge-danger mt-1" v-else>사용할 수 있는 이메일입니다.</span>
      <br>
      <label for="userpw">비밀번호</label>
      <input type="password" name="" id="userpw" placeholder="숫자 , 알파벳(소문자, 대문자), 특수문자 중 두 가지 이상을 조합하여 8자리 이상 작성하세요." @blur="pwCheck">
      <span class="badge badge-danger mt-1" v-if="isPasswordEmpty">{{alert_empty}}</span>
      <span class="badge badge-danger mt-1" v-if="passPassword">올바른 비밀번호입니다.</span>
      <span class="badge badge-danger mt-1" v-if="!availablePassword">비밀번호 규칙에 맞게 입력해주세요.</span>
      <br>
      <label for="userpwchk">비밀번호 확인</label>
      <input type="password" name="email" id="userpwchk" placeholder="위와 같은 비밀번호를 입력해주세요." @blur="pwDuplCheck">
      <span class="badge badge-danger mt-1" v-if="isPasswordCheckEmpty">{{alert_empty}}</span>
      <span class="badge badge-danger mt-1" v-if="duplPassword">비밀번호가 일치합니다.</span>
      <span class="badge badge-danger mt-1" v-if="notDuplPassword">비밀번호가 일치하지 않습니다.</span>
      <br>
      <label for="usernickname">닉네임</label>
      <input type="text" name="email" id="usernickname" placeholder="닉네임을 입력하세요." @blur="nicknameDuplCheck">
      <span class="badge badge-danger mt-1" v-if="isNickEmpty">{{alert_empty}}</span>
      <span class="badge badge-danger mt-1" v-else-if="isNickDupl">이미 사용중인 닉네임입니다.</span>
      <span class="badge badge-danger mt-1" v-else-if="isNickDupl===false">사용할 수 있는 닉네임입니다.</span>
      <br>
      <div style="height: 50px"></div>
      <input type="checkbox" v-model="selectAll" @click="select()" /> 모두 동의합니다.
      <br>
      <div v-for='option in options' class="checkbox" :key="option">
        <label>
          <input type="checkbox" :value="option.index" v-model="selected" @change='updateCheckall()'>{{ option.title }}
        </label>
        <textarea readonly :value="option.content" cols="30" rows="10"></textarea>
      </div>
      <div style="height: 50px"></div>
      <button @click="totalCheck">회원가입</button>
  </section>
  <!-- <footer></footer> -->
</template>
<script src="js/EmailRegister.js"></script>