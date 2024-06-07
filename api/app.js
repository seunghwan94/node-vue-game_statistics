const express = require('express');
const func = require('./func')
const config = require('./config.json');
const app = express();
const port = 3030;

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
        const userStats = userStatsJson.userStats[0];

        //사용자 최근 매칭 데이터 가져오기
        const uri3 = "user/games/"+userNum;
        const userMatches = await func.axios_req(uri3);

        
        
        res.json(userMatches);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
