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
        const nickname = '찢어진니키의장갑';
        const userNumJson = await func.axios_req(uri1, nickname);
        const userNum = String(userNumJson.user.userNum);

        //사용자 현재 시즌 정보 가져오기
        const seasonId = "/25";
        const uri2 = "user/stats/"+userNum+seasonId;
        const userStatsJson = await func.axios_req(uri2);
        const userStats = userStatsJson.userStats.map(stat => {
            return {
                stat
            };
        });

        //사용자 최근 매칭 데이터 가져오기
        const uri3 = "user/games/"+userNum;
        const userGamesJson = await func.axios_req(uri3);
        const userGames = userGamesJson.userGames.map(game => {
            const characterNum = game.characterNum;
            const deaths = game.playerDeaths;
            const kda = deaths === 0 ? (game.playerKill + game.playerAssistant) : ((game.playerKill + game.playerAssistant) / deaths).toFixed(2);
            
            return {
                accountLevel: game.accountLevel, // 계정 레벨
                matchingMode: game.matchingMode, // 2:일반, 3:랭크
                playTime: game.playTime,// 플레이 시간 (ex 14분 54초 -> 1454)
                characterName: config.character[characterNum],// 캐릭터 이름
                skinCode: game.skinCode,// 사용한 스킨
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
        
        const response = {
            userStats,
            userGames,
            accountLevel
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
