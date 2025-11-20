const PagosService = require('../services/PagosService');

const ControllersPago = {
    async traerPagos(req, res) {
        const pagos = await PagosService.traerPagos();
        res.json(pagos);
    },

    async crearPago(req, res) {
        const nuevo = req.body;
        const pago = await PagosService.guardarPago(nuevo);
        res.json({ mensaje: "Pago creado exitosamente", pago });
    },

    async actualizarPago(req, res) {
        const id = parseInt(req.params.id);
        const nuevo = req.body;
        const pago = await PagosService.actualizarPago(id, nuevo);
        res.json({ mensaje: "Pago actualizado exitosamente", pago });
    },

    async eliminarPago(req, res) {
        const id = parseInt(req.params.id);
        const pago = await PagosService.eliminarPago(id);
        res.json({ mensaje: "Pago eliminado exitosamente", pago });
    }
}

module.exports = ControllersPago;
