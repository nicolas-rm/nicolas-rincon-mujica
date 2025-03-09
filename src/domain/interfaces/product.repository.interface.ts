import { ProductEntity } from "../entities/index.entity";

export abstract class ProductRepositoryInterface {
    abstract create(refreshToken: Partial<ProductEntity>): Promise<ProductEntity>;
    abstract findAll(): Promise<ProductEntity[]>;
    abstract findById(id: string): Promise<ProductEntity | null>;
    abstract update(id: string, refreshToken: Partial<ProductEntity>): Promise<ProductEntity>;
    abstract delete(id: string): Promise<ProductEntity>;
}
