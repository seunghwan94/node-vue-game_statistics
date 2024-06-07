<template>
  <div class="contain">    
    <div class="main-header">
      <div class="header-left">
        <img class="logo" alt="logo" src="./assets/logo2.png">
        <div class="logo-text">ER.GG</div>
      </div>

      <div class="header-menu">
        <div class="header-menu-list">메뉴</div>
        <div class="header-menu-list">상태</div>
        <div class="header-menu-list">창</div>
      </div> 
    </div>

    <div v-if="is_main==0" class="main-body" style="height: calc(100vh - 213px);">
      <MainView />
    </div>
    <div v-if="is_main==1" class="main-body" style="display: flex;justify-content: center;">
      <MainSearch />
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

export default {
  name: 'App',
  data(){
    return{
      is_main:1,
    }
  },
  components: {
    MainView,
    MainFooter,
    MainSearch,
  }
}
</script>

<style>
body{
  margin:0px;
  /* padding: 20px; */
  box-sizing: border-box;
  background: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  font-size: 20px;
  font-weight: bold;
  color:white;
}
.header-left {
  display: flex;
  align-items: center;
}

.main-header {
  background: #041244;
  width: 100%;
  height: 122px;
}
.header-menu {
  background: #2c3e50;
  width: 100%;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
