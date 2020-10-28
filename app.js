const express = require('express')
const cors = require('cors');


const app = express()

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

// APIのバージョン
const apiVer = '/api/v1';

// パス
app.use(`/${apiVer}/auth`, require('./src/routes/auth'));


var knex = require('knex')({
    client: 'pg',
    connection: {
        // host: '127.0.0.1',
        host: '0.0.0.0',
        port: '32772',
        user: 'admin',
        password: 'admin',
        // database: 'demo'
        database: 'postgres'
    }
});

app.get('/users', async (req, res) => {
    const result = await knex
        .select('first_name')
        .from('users')
    res.json({
        users: result
    });
});


// エラー処理
// TODO: 返却するステータスコードをエラーメッセージは可変にする
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Server Error' });
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))