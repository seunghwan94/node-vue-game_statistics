<template>
    <div class="main-search-recode">
        <div>{{ datalist.matchingMode === 2 ? '일반' : '랭크' }} {{ formatTime(datalist.playTime) }}</div>
        <hr/>
        <div style="display:flex;width:100%;justify-content: space-between;align-items: center;">
            <div style="display: flex;align-items: center;">
                <div>
                    <img class="tier-img" :src="`${datalist.skinUrl}`" style="padding-bottom: 0px;"/> <br/>{{ datalist.characterName }}
                </div>
                <div style="margin: 0 15px;">
                    <div style="display: flex;font-weight: bold;margin-bottom: 10px;">Lv {{ datalist.characterLevel }}</div>
                    <div > TK / K / A</div>
                    <div style="font-weight: bold;">{{ datalist.teamKill }} / {{ datalist.playerKill }} / {{ datalist.playerAssistant }}</div>
                </div>
            </div>
            <div>
                
            </div>
            <div style="margin: 0 15px;display: flex;flex-direction: column;width: 25%;">
                <div style="display: flex;justify-content: space-between;;align-items: center;">
                    <div style="font-weight: bold">{{ datalist.gameRank }}</div> 
                    <div style="font-size: 12px;color: gray;">등수</div>
                </div>
                <div style="display: flex;justify-content: space-between;;align-items: center;">
                    <div style="font-weight: bold">{{ datalist.damageToPlayer }}</div> 
                    <div style="font-size: 12px;color: gray;">딜량</div>
                </div>
                <div style="display: flex;justify-content: space-between;;align-items: center;">
                    <div style="font-weight: bold;">{{ datalist.kda }}</div>
                    <div style="font-size: 12px;color: gray;">평점(KDA)</div>
                </div>
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
    },
    props:{
        datalist:Object
    },
    methods: {
        formatTime(time) {
        const hours = Math.floor(time / 100); // 시간
        const minutes = time % 100; // 분
        return `${hours} : ${minutes < 10 ? '0' + minutes : minutes}`;
        }
    }
}
</script>
<style>
.main-search-recode {
    border: 2px solid gray;
    width: 94%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin: 10px 0;
}
</style>