const ControllersPago = require('../controllers/ControllersPago');
const express = require('express');
const router = express.Router();

router.get("/pagos", ControllersPago.traerPagos);

module.exports = router;