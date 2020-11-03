const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  if (req.query.test) {
    res.send(`get request ${req.query.test}`);
  } else {
    res.send('get request');
  }
});

module.exports = router;
