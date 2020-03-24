const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    event: 'Semana omnistack 11',
    aluno: 'Cleiton Souza'
  });
});

module.exports = routes;