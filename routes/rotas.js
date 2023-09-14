const { Router } = require('express');

const { rotasCedulas } = require('./rotasCedulas');

const rotas = new Router();

rotas.use(rotasCedulas);

module.exports = rotas;
