import { CustomError } from '../../../configurations/customErrors';
import { Response, Request } from 'express';
import { ProductRepositoryInterface } from '../../../domain/interfaces/product.repository.interface';

export class UpdateProductUseCase {
    /*
    name        String
    description String
    height      Float?
    length      Float?
    width       Float?
     */
    constructor(private readonly productRepository: ProductRepositoryInterface) { }

    // productId: string, product: { name: string, description: string, height?: number, length?: number, width?: number },
    public async execute(req: Request, res: Response): Promise<{ id: string } | undefined> {

        const productId = req.params.id;
        const product = req.body;

        try {

            if (productId !== product.id) {
                throw CustomError.badRequest('El id del producto no coincide con el id del producto a actualizar');
            }

            const find = await this.productRepository.findById(productId);
            if (!find) {
                throw CustomError.badRequest('Producto no encontrado');
            }

            return await this.productRepository.update(product.id, product);
        } catch (error) {
            throw error
        }
    }
}
