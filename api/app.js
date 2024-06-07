const express = require('express');
const app = express();
const port = 3030;

// 루트 엔드포인트에 "Hello, World!"를 반환합니다.
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});