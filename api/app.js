const express = require('express');
const func = require('./func')
const app = express();
const port = 3030;

var uriArr = [

  "userStats" = [
    "acti" = "user/nickname"
  ]

]

app.get('/', async (req, res) => {
  const acti = "user/nickname";
  const str = req.body;

    try {
        const userNumJson = await func.axios_req(acti, str);
        const userNum = String(userNumJson.user.userNum);

        const uri = "user/stats/";
        const req = uri+userNum+"/25";
        const returnData = await func.axios_req(req);
      
        
        res.json(returnData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
