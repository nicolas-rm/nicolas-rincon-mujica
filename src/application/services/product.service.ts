import { Request, Response } from 'express';
import { ProductRepository } from './../../infrastructure/repositories/product.repository';
import { CreateProductUseCase, DeleteProductUseCase, GetAllProductUseCase, GetProductUseCase, UpdateProductUseCase } from '../use-cases/product/product.use-cases';

class ProductService {

    private createProductUseCase: CreateProductUseCase;
    private deleteProductUseCase: DeleteProductUseCase;
    private updateProductUseCase: UpdateProductUseCase;
    private getProductUseCase: GetProductUseCase;
    private getAllProductUseCase: GetAllProductUseCase;

    constructor() {
        this.createProductUseCase = new CreateProductUseCase(new ProductRepository());
        this.deleteProductUseCase = new DeleteProductUseCase(new ProductRepository());
        this.updateProductUseCase = new UpdateProductUseCase(new ProductRepository());
        this.getProductUseCase = new GetProductUseCase(new ProductRepository());
        this.getAllProductUseCase = new GetAllProductUseCase(new ProductRepository());
    }

    public async create(req: Request, res: Response): Promise<{ id: string } | undefined> {
        return this.createProductUseCase.execute(req, res);
    }

    public async update(req: Request, res: Response): Promise<{ id: string } | undefined> {
        return this.updateProductUseCase.execute(req, res);
    }

    public async delete(req: Request, res: Response): Promise<{ id: string } | undefined> {

        console.log(req.params.id);
        console.log(req.body);

        return this.deleteProductUseCase.execute(req, res);
    }

    public async get(req: Request, res: Response): Promise<{ id: string; createdAt: Date; updatedAt: Date; name: string; description: string; height: number | null; length: number | null; width: number | null } | undefined> {
        return this.getProductUseCase.execute(req, res);
    }

    public async getAll(req: Request, res: Response): Promise<{ id: string; createdAt: Date; updatedAt: Date; name: string; description: string; height: number | null; length: number | null; width: number | null }[] | undefined> {
        return this.getAllProductUseCase.execute(req, res);
    }

    public async getAllQuery(req: Request, res: Response): Promise<void> { }
}

export default new ProductService();
