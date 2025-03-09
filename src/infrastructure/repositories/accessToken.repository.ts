import { AccessTokenRepositoryInterface } from '../../domain/interfaces/accessToken.repository.interface';
import prisma from '../database/prisma.service';
import { AccessTokenEntity } from '../../domain/entities/accessToken';

export class AccessTokenRepository implements AccessTokenRepositoryInterface {
    constructor() { }

    async create(accessToken: AccessTokenEntity): Promise<AccessTokenEntity> {
        return prisma.accessToken.create({ data: accessToken });
    }

    async findAll(): Promise<AccessTokenEntity[]> {
        return prisma.accessToken.findMany();
    }

    async findById(id: string): Promise<AccessTokenEntity | null> {
        return prisma.accessToken.findUnique({ where: { id } });
    }

    async findByToken(token: string): Promise<AccessTokenEntity | null> {
        return prisma.accessToken.findUnique({ where: { token } });
    }

    async findByAuthId(authId: string): Promise<AccessTokenEntity[]> {
        return prisma.accessToken.findMany({ where: { authId } });
    }

    async update(id: string, accessToken: AccessTokenEntity): Promise<AccessTokenEntity> {
        return prisma.accessToken.update({ where: { id }, data: accessToken });
    }

    async delete(id: string): Promise<AccessTokenEntity> {
        return prisma.accessToken.delete({ where: { id } });
    }
}
