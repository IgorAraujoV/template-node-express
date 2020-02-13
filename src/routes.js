const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ Message: 'ok diferent' });
});

module.exports = routes;
