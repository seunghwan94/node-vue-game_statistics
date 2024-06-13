<template>
  <div class="search-contain">
    <div class="search-header">
      <div style="font-size: 17px;margin-bottom: 5px;  border: 2px solid gray; border-radius: 20px;padding:5px">Lv {{ userSearchList[0].userGames[0].accountLevel }}</div>
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 5px;">{{ userSearchList[0].userStats[0].stat.nickname }}</div>
      <div style="font-size: 14px;">정규 시즌 {{ userSearchList[0].userStats[0].stat.seasonId }}</div>
    </div>
    <div class="search-body">
      <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;margin-bottom: 15px;">
        <div style="margin-right: 20px;">
          <img :src="tierImage" style="width: 40px;padding: 0px;border-radius:50%;"/>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-start; width: 55%;">
          <div>랭크</div>
          <div>{{ userSearchList[0].userStats[0].stat.mmr }} RP</div>
          <div>{{ tierName }}</div>
          <div>((순위)) 위</div>
        </div>
      </div>
      <hr/>
      <canvas ref="MyChart"></canvas>
    </div>
    <div class="search-main">
      <p>최근 10매치 요약</p>
      <div style="display: flex;justify-content: space-around;width: 100%;"> 
        <button class="button-tab" :class="is_button==0? 'button-select':''" @click="is_button=0">전 체</button>
        <button class="button-tab" :class="is_button==1? 'button-select':''" @click="is_button=1">랭 크</button>
        <button class="button-tab" :class="is_button==2? 'button-select':''" @click="is_button=2">일 반</button>
      </div>
      <hr/>
      <MainSearchRecordVue v-for="(datalist,index) in GameList" :key="index" :datalist="datalist" />
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
import MainSearchRecordVue from './MainSearchRecord.vue'
import config from '../../config.json'

Chart.register(...registerables)

export default {
  data() {
    return {
      is_button: 0,
      userId: '',
      GameList:[],

      TierList: config.TierList,
      Tier: config.Tier,

      type: 'bar',
      data: {
        labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
        datasets: [{
          label: '# ((뭐넣을지 고민))',
          data: [ 12, 19, 3, 5, 2, 3 ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }
  },
  mounted(){
    this.createChart();
    this.gameListadd();
  },
  methods:{
    createChart(){
      new Chart(this.$refs.MyChart, {
        type:'bar',
        data:this.data,
        options:this.options
      })
    },
    gameListadd(){
      this.GameList=this.userSearchList[0].userGames;
    },
    findTierKey(mmr) {
      let keys = Object.values(this.Tier);
      let index = 0;
      for (let i = keys.length - 1; i >= 0; i--) {
        if (mmr >= keys[i]) {
          index = i;
          break;
        }
      }
      return {
        key: Object.keys(this.TierList)[index],
        value: Object.keys(this.Tier)[index]
      };
    }
  },
  computed: {
    tierImage() {
      let mmr = this.userSearchList[0].userStats[0].stat.mmr;
      return this.findTierKey(mmr).key;
    },
    tierName() {
      let mmr = this.userSearchList[0].userStats[0].stat.mmr;
      return this.findTierKey(mmr).value;
    }
  },
  props:{
    userSearchList:Object,
  },
  components:{
    MainSearchRecordVue,
  }
}

</script>

<style>
.search-contain {
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
.search-body, .search-main{
  background: white;
  display: flex;
  margin-bottom: 15px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
}
hr {
  width: 100%;
}
.button-tab {
  position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    /* box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2); */
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    cursor: pointer;
}
.button-select {
  background: gray;
}
.button-tab:hover {
  background: gray;
}
</style>
