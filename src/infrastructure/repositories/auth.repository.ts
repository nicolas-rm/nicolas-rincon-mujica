import { AuthRepositoryInterface } from '../../domain/interfaces/auth.repository.interface';
import { AuthEntity } from '../../domain/entities/auth.entity';
import prisma from '../database/prisma.service';

export class AuthRepository implements AuthRepositoryInterface {
    constructor() { }

    async create(auth: AuthEntity): Promise<AuthEntity> {
        return prisma.auth.create({ data: auth });
    }

    async findAll(): Promise<AuthEntity[]> {
        return prisma.auth.findMany();
    }

    async findById(id: string): Promise<AuthEntity | null> {
        return prisma.auth.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<AuthEntity | null> {
        return prisma.auth.findUnique({ where: { email } });
    }

    async update(id: string, auth: AuthEntity): Promise<AuthEntity> {
        return prisma.auth.update({ where: { id }, data: auth });
    }

    async delete(id: string): Promise<AuthEntity> {
        return prisma.auth.delete({ where: { id } });
    }
}
