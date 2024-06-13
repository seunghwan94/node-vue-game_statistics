<template>
    <div class="main-search-recode">
        <div>{{ datalist.matchingMode === 2 ? '일반' : '랭크' }} {{ formatTime(datalist.playTime) }}</div>
        <hr/>
        <div style="display:flex;width:100%;justify-content: space-between;align-items: center;">
            <div><img class="tier-img" :src="`https://cdn.dak.gg/assets/er/game-assets/1.23.0/CharCommunity_${Character[datalist.characterName]}_S000.png`" style="padding-bottom: 0px;"/> <br/>{{ datalist.characterName }}</div>
            <div>
                <div>{{ datalist.teamKill }} / {{ datalist.playerKill }} / {{ datalist.playerAssistant }}</div>
                <div>{{ datalist.damageToPlayer }}</div>
                <div>{{ datalist.kda }}</div>
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
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
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