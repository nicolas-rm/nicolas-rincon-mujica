import { ProductRepositoryInterface } from '../../domain/interfaces/product.repository.interface';
import prisma from '../database/prisma.service';
import { ProductEntity } from '../../domain/entities/index.entity';

export class ProductRepository implements ProductRepositoryInterface {
    constructor() { }

    async create(product: ProductEntity): Promise<ProductEntity> {
        return prisma.product.create({ data: product });
    }

    async findAll(): Promise<ProductEntity[]> {
        return prisma.product.findMany();
    }

    async findById(id: string): Promise<ProductEntity | null> {
        return prisma.product.findUnique({ where: { id } });
    }

    // async findByToken(token: string): Promise<ProductEntity | null> {
    //     return prisma.product.findUnique({ where: { token } });
    // }

    // async findByAuthId(authId: string): Promise<ProductEntity[]> {
    //     return prisma.product.findMany({ where: { authId } });
    // }

    async update(id: string, product: ProductEntity): Promise<ProductEntity> {
        return prisma.product.update({ where: { id }, data: product });
    }

    async delete(id: string): Promise<ProductEntity> {
        return prisma.product.delete({ where: { id } });
    }
}
