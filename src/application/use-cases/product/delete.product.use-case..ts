import { CustomError } from '../../../configurations/customErrors';
import { Response, Request } from 'express';
import { ProductRepositoryInterface } from '../../../domain/interfaces/product.repository.interface';

export class DeleteProductUseCase {

    constructor(private readonly productRepository: ProductRepositoryInterface) { }

    // productId: string,
    public async execute(req: Request, res: Response): Promise<{ id: string } | undefined> {

        const productId = req.params.id;

        try {
            const find = await this.productRepository.findById(productId);
            if (!find) {
                throw CustomError.badRequest('Producto no encontrado');
            }

            return await this.productRepository.delete(productId);
        } catch (error) {
            throw error
        }
    }
}
