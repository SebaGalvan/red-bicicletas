"use strict";

var express = require('express');

var router = express.Router();

var biciletaController = require('../controllers/bicicleta');

router.get('/', biciletaController.bicicleta_list);
module.exports = router;