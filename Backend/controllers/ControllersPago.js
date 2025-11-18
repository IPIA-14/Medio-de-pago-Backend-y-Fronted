const PagosService = require('../services/PagosService');

const ControllersPago = {
    async traerPagos(req,res) {
        const pagos = await PagosService.traerPagos();
        res.json(pagos);
    }
}
module.exports = ControllersPago;