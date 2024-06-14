const express = require('express');
const cors = require('cors');
const func = require('./func');
const config = require('./config.json');
const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
 
    try {
        //사용자 넘버 가져오기
        const uri1 = "user/nickname";
        const nickname = '한동그라미';
        const userNumJson = await func.axios_req(uri1, nickname);

        if (!userNumJson || !userNumJson.user || !userNumJson.user.userNum) {
            return res.json({ message: 'user number not found' });
        }

        const userNum = String(userNumJson.user.userNum);

        //사용자 현재 시즌 정보 가져오기
        const seasonId = "/25";
        const uri2 = `user/stats/${userNum}${seasonId}`;
        const userStatsJson = await func.axios_req(uri2);

        if (!userStatsJson || !userStatsJson.userStats) {
            return res.json({ message: 'user stats not found' });
        }

        const userStats = userStatsJson.userStats.map(stat => {
            return {
                stat
            };
        });

        //사용자 최근 매칭 데이터 가져오기
        const uri3 = `user/games/${userNum}`;
        const userGamesJson = await func.axios_req(uri3);

        if (!userGamesJson || !userGamesJson.userGames) {
            return res.json({ message: 'user games not found' });
        }

        const userGames = userGamesJson.userGames.map(game => {
            const characterNum = game.characterNum;
            const deaths = game.playerDeaths;
            const kda = deaths === 0 ? (game.playerKill + game.playerAssistant) : ((game.playerKill + game.playerAssistant) / deaths).toFixed(2);
            const skinCode = String(game.skinCode).slice(-3);
            const skinUrl = `https://cdn.dak.gg/assets/er/game-assets/1.23.0/CharProfile_${config.character_en[characterNum]}_S${skinCode}.png`;
            return {
                accountLevel: game.accountLevel, // 계정 레벨
                matchingMode: game.matchingMode, // 2:일반, 3:랭크
                playTime: game.playTime,// 플레이 시간 (ex 14분 54초 -> 1454)
                characterName: config.character[characterNum],// 캐릭터 이름
                skinUrl,// 사용한 스킨
                gameRank: game.gameRank,// 최종 등수.
                characterLevel: game.characterLevel,// 최종 레벨
                teamKill: game.teamKill,// TK
                playerKill: game.playerKill,// K
                playerAssistant: game.playerAssistant,// A
                damageToPlayer: game.damageToPlayer,// 딜량
                kda: parseFloat(kda)// kda
            };
        });

        const accountLevel = userGames.length > 0 ? userGames[0].accountLevel : "판수가 부족합니다.";

        const uri4 = `freeCharacters/2`;
        const lotationJson = await func.axios_req(uri4);

        if (!lotationJson || !lotationJson.freeCharacters) {
            return res.json({ message: 'free characters not found' });
        }

        const lotaion = lotationJson.freeCharacters;

        const response = {
            userStats,
            userGames,
            accountLevel,
            lotaion
        };

        res.json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
