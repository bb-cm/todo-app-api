const express = require('express');

const router = express.Router();
const validator = require('express-joi-validation').createValidator({
  passError: true,
});
const todoSchema = require('../schemas/todo');

const todoController = require('../controllers/todo');

// Todo取得
router.get('', validator.query(todoSchema.getTodo), todoController.getTodo);

module.exports = router;
