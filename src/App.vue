<template>
  <div class="contain">    
    <div class="main-header">
      <div class="header-logo">
        <img class="logo" alt="logo" src="./assets/logo2.png">
        <div class="logo-text">ER.GG</div>
      </div>

      <div class="header-menu">
        <div class="header-menu-list" @click="is_main=0">전적</div>
        <div class="header-menu-list" @click="is_main=2">티어</div>
        <div class="header-menu-list" @click="is_main=3">실험체</div>
      </div> 
    </div>
    <!-- 전적 -->
    <div v-if="is_main==0" class="main-body" style="height: calc(100vh - 213px);">
      <MainView @Search="Search" />
    </div>
    <div v-if="is_main==1" class="main-body" style="display: flex;justify-content: center;">
      <MainSearch :userSearchList="userSearchList"/>
    </div>
    <!-- 티어 -->
    <div v-if="is_main==2" class="main-body" style="display: flex;justify-content: center;">
      <MainTier />
    </div>
    <!-- 창 -->
    <div v-if="is_main==3" class="main-body" style="display: flex;justify-content: center;">
      <MainCharcter />
    </div>

    <div class="main-footer">
      <MainFooter />
    </div>
  </div>

</template>

<script>
import MainView from './components/MainView.vue';
import MainFooter from './components/MainFooter.vue';
import MainSearch from './components/MainSearch.vue';
import MainTier from './components/MainTier.vue';
import MainCharcter from './components/MainCharcter.vue';
import axios from 'axios';
import {Server} from '../config.json'


export default {
  name: 'App',
  data() {
    return {
      is_main: 0,
      userId: '',
      userSearchList: [],
    };
  },
  methods: {
    Search(userId) {
      axios.get(`${Server.host}:${Server.port}/`, {
        params: {userId}
      }).then(res => {
        console.log(res.data);
        this.userSearchList.push(res.data);
        this.is_main=1;
      }).catch(err => {
        console.error(err);
      });
    }
  },
  components: {
    MainView,
    MainFooter,
    MainSearch,
    MainTier,
    MainCharcter,
  }
}
</script>

<style>
@font-face {
    font-family: 'baemin';
    src: url('./assets/baemin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'godic';
    src: url('./assets/Pretendard-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body{
  margin:0px;
  /* padding: 20px; */
  box-sizing: border-box;
  background: white;
}
.input-text::placeholder {
  font-family: 'baemin', sans-serif;
}
#app {
  font-family: 'godic', sans-serif; /* 전체 앱에 적용 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.contain {
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative; 
}
.logo {
  width: 45px;
  padding: 16px 20px;
}
.logo-text {
  font-family: 'baemin', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color:white;
}
.input-text {
  font-family: 'godic', sans-serif;
}
.header-logo {
  display: flex;
  align-items: center;
}

.main-header {
  background: #041244;
  width: 100%;
  /* height: 122px; */
}
.header-menu {
  background: #2c3e50;
  width: 100%;
  /* height: 45px; */
  color: white;
  display: flex;
  align-items: center;
  padding: 15px 20px;
}
.header-menu-list {
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
}
.main-body {
  width: 100%;
}
.main-footer {
  background-color: gray;
  padding: 20px;
  color: white;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
</style>
