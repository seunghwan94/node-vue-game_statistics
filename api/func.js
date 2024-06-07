const axios = require('axios');
const api = require('./config.json');

// axios 요청을 비동기 함수로 정의하여 Promise를 반환
async function axios_req(acti, str) {
  const url = api.api_url+acti;
  const key = api.api_key;
  const params = {query : str};
  const headers = {'x-api-key' : key};

  try {
      const response = await axios.get(url, {
         params,headers
      });
      return response.data; // 요청의 결과 데이터를 반환
  } catch (error) {
      throw error; // 오류 발생 시 예외를 던져 호출한 곳에서 처리할 수 있게 함
  }
  
}


  module.exports = {
    axios_req
  }