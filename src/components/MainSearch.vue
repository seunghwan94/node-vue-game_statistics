<template>
  <div class="search-contain">
    <div class="search-header">
      <div style="font-size: 17px;margin-bottom: 5px;  border: 2px solid gray; border-radius: 20px;padding:5px">Lv 100</div>
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 5px;">아이디</div>
      <div style="font-size: 14px;">정규 시즌 4</div>
    </div>
    <div class="search-body">
      <div style="display: flex; flex-direction: column; align-items: flex-start; width: 55%;">
        <div>랭크</div>
        <div>4297 RP</div>
        <div>플래티넘 3</div>
        <div>17,387위</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  }
}
</script>

<style>
.search-contain {
  height: 80vh;
  width: 55%;
  display: flex;
  flex-direction: column;
  
  background-color: rgb(136, 134, 134);
  margin: 50px;
}
.search-header{
  background: violet;
  display: flex;
  margin-bottom: 25px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
}
.search-body{
  background: violet;
  display: flex;
  margin-bottom: 15px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
}
</style>
