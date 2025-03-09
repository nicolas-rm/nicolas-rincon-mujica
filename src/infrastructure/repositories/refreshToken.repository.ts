import { RefreshTokenRepositoryInterface } from '../../domain/interfaces/refreshToken.repository.interface';
import prisma from '../database/prisma.service';
import { RefreshTokenEntity } from './../../domain/entities/refreshToken.entity';

export class RefreshTokenRepository implements RefreshTokenRepositoryInterface {
    constructor() { }

    async create(refreshToken: RefreshTokenEntity): Promise<RefreshTokenEntity> {
        return prisma.refreshToken.create({ data: refreshToken });
    }

    async findAll(): Promise<RefreshTokenEntity[]> {
        return prisma.refreshToken.findMany();
    }

    async findById(id: string): Promise<RefreshTokenEntity | null> {
        return prisma.refreshToken.findUnique({ where: { id } });
    }

    async findByToken(token: string): Promise<RefreshTokenEntity | null> {
        return prisma.refreshToken.findUnique({ where: { token } });
    }

    async findByAuthId(authId: string): Promise<RefreshTokenEntity[]> {
        return prisma.refreshToken.findMany({ where: { authId } });
    }

    async update(id: string, refreshToken: RefreshTokenEntity): Promise<RefreshTokenEntity> {
        return prisma.refreshToken.update({ where: { id }, data: refreshToken });
    }

    async delete(id: string): Promise<RefreshTokenEntity> {
        return prisma.refreshToken.delete({ where: { id } });
    }
}
