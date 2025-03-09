import { PrismaClient } from '@prisma/client';

class PrismaService extends PrismaClient {
    constructor() {
        super();
    }

    async connect() {
        await this.$connect();
        console.log('📦 Prisma conectado a la base de datos');
    }

    async disconnect() {
        await this.$disconnect();
        console.log('🔌 Prisma desconectado de la base de datos');
    }
}

// Exportar una única instancia del servicio
const prisma = new PrismaService();
export default prisma;
