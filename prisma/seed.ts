// seed.ts
import { PrismaClient } from '@prisma/client';
import { Bcrypt } from '../src/configurations/bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Crear usuario root
    const user = await prisma.user.create({ data: {} });

    // Crear auth con contraseña hasheada
    const hashedPassword = await Bcrypt.hash('admin123');
    await prisma.auth.create({
        data: {
            email: 'admin@example.com',
            passwordHash: hashedPassword,
            userId: user.id,
        }
    });

    // Crear perfil del usuario
    await prisma.profile.create({
        data: {
            userId: user.id,
            name: 'Admin',
            lastName: 'Root',
            birthDate: new Date('1990-01-01'),
        }
    });

    console.log('✅ Usuario root creado exitosamente');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
