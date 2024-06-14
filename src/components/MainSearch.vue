<template>
  <div class="search-contain">
    <div v-if="!userSearchList[0].userStats.nickname" class="search-header">
      <div style="font-size: 17px;margin-bottom: 5px;  border: 2px solid gray; border-radius: 20px;padding:5px">Lv {{ userSearchList[0].userGames[0].accountLevel }}</div>
      <div style="font-size: 24px; font-weight: bold; margin-bottom: 5px;">{{ userSearchList[0].userStats[0].stat.nickname }}</div>
      <div style="font-size: 14px;">정규 시즌 {{ userSearchList[0].userStats[0].stat.seasonId }}</div>
    </div>
    <div v-else class="search-header">
      <div style="font-weight: bold">{{userSearchList[0].userStats.nickname}}님</div>
      <div> </div>
      <div>해당 유저는 이번시즌에 플레이한 기록이 없습니다</div>
    </div>

    <div class="search-body">
      <div style="display: flex;justify-content: flex-start;align-items: center;width: 100%;margin-bottom: 15px;">
        <div style="margin-right: 20px;">
          <img :src="tierImage" style="width: 40px;padding: 0px;border-radius:50%;"/>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-start; width: 55%;">
          <div>랭크</div>
          <!-- <div>{{ userSearchList[0].userStats[0].stat.mmr }} RP</div>
          <div>{{ tierName }}</div>
          <div>{{ userSearchList[0].userStats[0].stat.rank }} 위</div> -->
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
      <div v-if="is_button==0" style="width: 100%;">
        <MainSearchRecordVue v-for="(datalist,index) in GameList" :key="index" :datalist="datalist" />
      </div>
      <div v-if="is_button==1" style="width: 100%;">
        <div v-for="(datalist,index) in GameList" :key="index">
          <MainSearchRecordVue v-if="datalist.matchingMode==3" :datalist="datalist" />
        </div>
      </div>
      <div v-if="is_button==2" style="width: 100%;">
        <div v-for="(datalist,index) in GameList" :key="index">
          <MainSearchRecordVue v-if="datalist.matchingMode==2" :datalist="datalist" />
        </div>
      </div>
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
      ChartDataDamage:[],
      ChartDataTime:[],

      TierList: config.TierList,
      Tier: config.Tier,

      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# 플레이 마다 넣은 딜량',
          data: this.ChartData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Update to a single color if desired
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false // To not fill the area under the line
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
    this.gameListadd();
    this.createChart();
  },
  methods:{
    createChart() {
      new Chart(this.$refs.MyChart, {
        type: 'line', // Change this from 'bar' to 'line'
        data: this.data,
        options: this.options
      });
    },
    gameListadd() {
      this.GameList = this.userSearchList[0].userGames;

      // ChartData 초기화
      this.ChartDataDamage = [];
      this.ChartDataTime = [];

      // userGames 배열을 반복하면서 damageToPlayer와 게임 시간을 ChartData에 추가
      this.userSearchList[0].userGames.forEach(game => {
        this.ChartDataDamage.push(game.damageToPlayer);
        this.ChartDataTime.push(game.characterName); // playTime을 게임 시간 데이터로 가정
      });

      // Chart 데이터셋과 labels 업데이트
      this.data.datasets[0].data = this.ChartDataDamage;
      this.data.labels = this.ChartDataTime;
    },

    findTierKey(mmr,rank) {
      
      if(rank <= 700){
        if(rank <= 200){
          return {
            key: Object.keys(this.TierList)[8],
            value: Object.keys(this.Tier)[8]
          }
        }else{
          return {
            key: Object.keys(this.TierList)[7],
            value: Object.keys(this.Tier)[7]
          }
        }
      }else{
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
    }
  },
  // computed: {
  //   tierImage() {
  //     let mmr = this.userSearchList[0].userStats[0].stat.mmr;
  //     let rank = this.userSearchList[0].userStats[0].stat.rank;
  //     return this.findTierKey(mmr,rank).key;
  //   },
  //   tierName() {
  //     let mmr = this.userSearchList[0].userStats[0].stat.mmr;
  //     let rank = this.userSearchList[0].userStats[0].stat.rank;
  //     return this.findTierKey(mmr,rank).value;
  //   }
  // },
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
