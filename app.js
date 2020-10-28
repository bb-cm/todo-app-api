const express = require('express')
const cors = require('cors');


const app = express()

app.disable('x-powered-by');

// APIのバージョン
const apiVer = '/api/v1';

// パス
app.use(`/${apiVer}/auth`, require('./src/routes/auth'));


// エラー処理
// TODO: 返却するステータスコードをエラーメッセージは可変にする
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Server Error' });
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))