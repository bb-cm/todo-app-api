const express = require('express');

const router = express.Router();
const sampleController = require('../controllers/sample');

// GETサンプル
router.get('', sampleController.getSomething);

// GETサンプル パス指定
router.get('/path', sampleController.getPath);

module.exports = router;
