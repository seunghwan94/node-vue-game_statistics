<template>
    <div class="tier-contain">
      <div class="tier-title">티어표</div>
      <div class="tier-main">
        <div>랭크 티어 정보</div>
        <hr style="width:100%"/>
        <div class="tier-body">
          <template v-for="(tierArray, index ) in Object.entries(TierList)" :key="index">
            <div class="tier-item">
              <img class="tier-img" :src="tierArray[0]" style="padding-bottom: 0px;"/>
              <div style="font-weight: bold;">{{ tierArray[1] }}</div>
            </div>
            <div>
              <font-awesome-icon v-if="index < Object.keys(this.TierList).length - 1" :icon="['fas', 'arrow-right']" />
            </div>
          </template>
        </div>
      </div>
      <div class="tier-sub">
        <div style="margin-right: 15px;">티어별 서브젝트</div>
        <div class="tier-sub-text">IV</div>→
        <div class="tier-sub-text">III</div>→
        <div class="tier-sub-text">II</div>→
        <div class="tier-sub-text">I</div>
      </div>
      <div class="tier-title" style="margin-top: 40px;">티어 범위</div>
      <div style="width: 100%; margin-bottom: 20px;">
        <table style="height: 616px; width: 100%;">
            <tbody>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 19.7831%; height: 22px; font-weight: bold;" colspan="2">티 어&nbsp;</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px; font-weight: bold;">RP 범위(변동될 수 있음)</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px; font-weight: bold;">입장료(1인/3인 사전 구성팀)</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px; font-weight: bold;">&nbsp;입장료(2인 사전 구성팀)</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[0][0]" style="padding: 0px;"/><div class="tier-text">아이언</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">0 ~ 199</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 88px;" rowspan="4">0</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 88px;" rowspan="4">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">200 ~ 399</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">400 ~ 599</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">600 ~ 799</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[1][0]" style="padding: 0px;"/><div class="tier-text">브론즈</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">800 ~ 999</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">10</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">1000 ~ 1199</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">12</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">1200 ~ 1399</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">14</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">1400 ~ 1599</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">16</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[2][0]" style="padding: 0px;"/><div class="tier-text">실버</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">1600 ~ 1849</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">18</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><span class="wysiwyg-color-pink110"><strong>+ 2</strong></span></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">1850 ~ 2099</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">20</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><span class="wysiwyg-color-pink110"><strong>+ 2</strong></span></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">2100 ~ 2349</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">22</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><span class="wysiwyg-color-pink110"><strong>+ 2</strong></span></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">2350 ~ 2599</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">24</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><span class="wysiwyg-color-pink110"><strong>+ 2</strong></span></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[3][0]" style="padding: 0px;"/><div class="tier-text">골드</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">2600 ~ 2899</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">26</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-red90">+ 3</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">2900 ~ 3199</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">28</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-red90">+ 3</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">3200 ~ 3499</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">30</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-red90">+ 3</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">3500 ~ 3799</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">32</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-red90">+ 3</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[4][0]" style="padding: 0px;"/><div class="tier-text">플레티넘</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">3800 ~ 4149</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">34</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-green110">+ 4</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">4150 ~ 4499</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">36</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-green110">+ 4</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">4500 ~ 4849</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">38</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-green110">+ 4</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">4850 ~ 5199</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">40</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;"><strong><span class="wysiwyg-color-green110">+ 4</span></strong></td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 88px;" rowspan="4"><img class="tier-img" :src="Object.entries(this.TierList)[5][0]" style="padding: 0px;"/><div class="tier-text">다이아몬드</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">4</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">5200 ~ 5599</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">43</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">3</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">5600 ~ 5999</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">44</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">2</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">6000 ~ 6399</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">45</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">1</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">6400 ~ 6799</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">46</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 22px;"><img class="tier-img" :src="Object.entries(this.TierList)[6][0]" style="padding: 0px;"/><div class="tier-text">미스릴</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">10</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">6800 ~</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">53 +</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 22px;"><img class="tier-img" :src="Object.entries(this.TierList)[7][0]" style="padding: 0px;"/><div class="tier-text">데미갓</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">10</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">미스릴 상위 700위 이내</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">&nbsp;</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
                <tr style="height: 22px;">
                    <td class="wysiwyg-text-align-center" style="width: 12.991%; height: 22px;"><img class="tier-img" :src="Object.entries(this.TierList)[8][0]" style="padding: 0px;"/><div class="tier-text">아이언</div></td>
                    <td class="wysiwyg-text-align-center" style="width: 6.79212%; height: 22px;">10</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.0354%; height: 22px;">미스릴 상위 200위 이내</td>
                    <td class="wysiwyg-text-align-center" style="width: 28.9503%; height: 22px;">(RP 250점 당 2점 추가)</td>
                    <td class="wysiwyg-text-align-center" style="width: 26.7857%; height: 22px;">&nbsp;</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { TierList} from '../../config.json'
  export default {
    data() {
      return {
        TierList:TierList,
      };
    }
  }
  </script>
  
  <style>
  .tier-contain {
    width: 55%;
    display: flex;
    flex-direction: column;
    margin: 50px;
    padding: 20px;
    align-items: flex-start;
  }
  .tier-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .tier-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  }
  .tier-img {
    width: 50px;
    padding: 16px 10px;
  }
  .tier-title {
    font-weight: bold;
    font-size: 27px;
    margin: 0 0 15px 0;
  }
  .tier-main {
    width: calc(100% - 40px);
    border: 1px solid gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tier-sub {
    display: flex;
    width: 100%;
    justify-content: center;
    background: rgb(189, 189, 189);
    height: 35px;
    border: 1px solid gray;
    border-top: none;
    align-items: center;
  }
  .tier-sub-text {
    font-weight: bold;
    padding: 0 5px;
  }
  .wysiwyg-text-align-center{
    border: 1px solid #ccc;
  }
  </style>
  