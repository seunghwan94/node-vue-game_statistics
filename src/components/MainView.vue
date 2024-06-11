<template>
  <div class="text-contain"></div>
  <div class="text-contains">
    <div class="logo-text" style="font-size: 35px;">ER.GG</div>
    <div class="input-container">
      <input v-model="userId" type="text" class="input-text" placeholder="플레이어 닉네임을 입력해 주세요."  @keyup.enter="SearchName">
      <font-awesome-icon class="icon-glass" :icon="['fas', 'magnifying-glass']" style="color:#2c3e50" size="lg" @click="SearchName"/>
    </div>
    <div class="text-info">
      <font-awesome-icon class="icon-info" :icon="['fas', 'circle-info']" style="color:white" size="lg" />
      쉼표(,)로 구분하여 여러 플레이어 닉네임을 입력하면 멀티서치로 이동합니다.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    SearchName(){
      console.log(this.userId);
      this.$emit('Search', this.userId);
    }
  }
}
</script>

<style>
.input-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}

.input-text {
  width: 570px;
  padding: 10px 40px 10px 10px; /* 오른쪽 여백을 더하여 아이콘 공간 확보 */
  font-size: 17px;
  border-radius: 5px;
  border: 2px solid gray;
  margin-top: 15px;
}

.text-info{
  font-size: 13px;
  color: white;
  margin-top:10px
}
.icon-glass {
  position: absolute;
  margin: 15px -570px 0 0;
  cursor: pointer;
}
.text-contains{
  position: absolute;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 10px 40px;
  width: 100%;
}

.text-contain {
  position: absolute;
  height: 75.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 10px 40px;
  background-image: url('../assets/main.jpg');
  background-color: black;
  background-repeat: no-repeat; /* 아이콘이 반복되지 않도록 설정 */
  background-size: cover; /* 비율을 유지하며 이미지 크기 조정 */
  outline: none;
  filter:brightness(65%)
}
</style>
