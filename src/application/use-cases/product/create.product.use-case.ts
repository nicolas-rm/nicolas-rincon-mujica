import { CustomError } from '../../../configurations/customErrors';
import { Response, Request } from 'express';
import { ProductRepositoryInterface } from '../../../domain/interfaces/product.repository.interface';

export class CreateProductUseCase {
    /*
    name        String
    description String
    height      Float?
    length      Float?
    width       Float?
     */

    constructor(private readonly productRepository: ProductRepositoryInterface) { }

    // product: { name: string, description: string, height?: number, length?: number, width?: number },
    public async execute(req: Request, res: Response): Promise<{ id: string } | undefined> {

        const product = req.body;

        try {
            const newProduct = await this.productRepository.create(product);
            return { id: newProduct.id };
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
