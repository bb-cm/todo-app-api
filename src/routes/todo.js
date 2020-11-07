const express = require('express');

const router = express.Router();
const todoController = require('../controllers/todo');

// Todo取得
router.get('', todoController.getTodo);

module.exports = router;
