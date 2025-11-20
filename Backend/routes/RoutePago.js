const ControllersPago = require('../controllers/ControllersPago');
const express = require('express');
const router = express.Router();

router.get("/pagos", ControllersPago.traerPagos);
router.post("/pagos", ControllersPago.crearPago);
router.put("/pagos/:id", ControllersPago.actualizarPago);
router.delete("/pagos/:id", ControllersPago.eliminarPago);

module.exports = router;
