<template>
    <div class="tier-contain">
      <div class="tier-title">실험체</div>
      <div class="tier-main">
        <div>실험체 목록</div>
        <hr style="width:100%"/>
        <div class="tier-body">
          <template v-for="(CharacterArray, index ) in Object.entries(Character)" :key="index">
            <div class="tier-item">
                <!-- {{CharacterArray}} -->
              <img class="tier-img" :src="`https://cdn.dak.gg/assets/er/game-assets/1.23.0/CharCommunity_${CharacterArray[1]}_S000.png`" style="padding-bottom: 0px;"/>
              <div style="font-weight: bold;">{{ CharacterArray[0] }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Character } from '../../config.json'

  export default {
    data() {
      return {
        Character:Character,
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
  </style>
  