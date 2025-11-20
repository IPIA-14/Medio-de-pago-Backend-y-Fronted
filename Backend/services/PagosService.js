const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PagosService = {
    async traerPagos() {
        return await prisma.modoPago.findMany();
    },

    async guardarPago(pago) {
        return await prisma.modoPago.create({
            data: pago
        });
    },

    async actualizarPago(id, pago) {
        return await prisma.modoPago.update({
            where: { num_pago: id },
            data: pago
        });
    },

    async eliminarPago(id) {
        return await prisma.modoPago.delete({
            where: { num_pago: id }
        });
    }
}

module.exports = PagosService;
