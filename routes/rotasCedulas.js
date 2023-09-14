const { Router } = require('express');

const { getCedulas, updateCedulas} = require('../controllers/cedulaController');

const rotasCedulas = new Router();

rotasCedulas.route('/cedulas')
   .get(getCedulas)
   .put(updateCedulas)

module.exports = { rotasCedulas };