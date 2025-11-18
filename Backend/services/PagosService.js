const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const PagosService = {
    async traerPagos() {
        const pagos = await prisma.modoPago.findMany();
        return pagos;
    }
}

module.exports = PagosService;