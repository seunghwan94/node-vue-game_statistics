const axios = require('axios');
const express = require('express');
const app = express();
const port = 3030;
const api = require('./config.json');

// 루트 엔드포인트에 "Hello, World!"를 반환합니다.
app.get('/', (req, res) => {
  const acti = "user/nickname";
  const str = "찢어진니키의장갑";
  const re = axios_req(acti,str);
  res.send(re);
});
// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
//axios
function axios_req(acti,str){
  const url = api.api_url;
  const key = api.api_key;
  const header = {
    headers: {
              'x-api-key': key,
            },
  };
  console.log(acti)
  console.log(str)
  console.log(url)
  console.log(key)
  axios.get(url+acti, // url
          {
            headers: {
              'x-api-key': key,
            },
          },
          {
            params: {
              "query" : str
            }
          },
        ) .then(response => {
          console.log(response)
      })
}