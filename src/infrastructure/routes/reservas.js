const express = require('express');
const { crearReserva } = require('../../application/controllers/ReservaController');

const router = express.Router();

router.post('/', crearReserva);

module.exports = router;
