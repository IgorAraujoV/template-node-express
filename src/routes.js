const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
  res.json({ Message: 'ok diferent' });
});

module.exports = router;
