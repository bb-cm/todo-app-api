const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.disable('x-powered-by');
// TODO: 許可するメソッドやヘッダー検討
const corsOptions = {
  origin: [process.env.CORS_URL1],
  methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  allowedHeaders: [
    'Accept',
    'Authorization',
    'ApiKey',
    'Content-Type',
    'Origin',
    'X-Requested-With',
    'If-None-Match',
  ],
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

// APIのバージョン
const apiVer = '/api/v1';

// パス
app.use(`${apiVer}/auth`, require('./src/routes/auth'));
app.use(`${apiVer}/todo`, require('./src/routes/todo'));
app.use(`${apiVer}/sample`, require('./src/routes/sample')); // TODO: 参考用あとで消します

// エラー処理
// TODO: 返却するステータスコードをエラーメッセージは可変にする
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    res.status(400).json({
      type: err.type,
      message: err.error.toString(),
    });
  }
  next(err.error);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
