import { CustomError } from '../../../configurations/customErrors';
import { Response, Request } from 'express';
import { ProductRepositoryInterface } from '../../../domain/interfaces/product.repository.interface';

export class GetProductUseCase {

    constructor(private readonly productRepository: ProductRepositoryInterface) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Servidor fuera de servicio' })
    }

    // productId: string,
    public async execute(req: Request, res: Response): Promise<{ id: string; createdAt: Date; updatedAt: Date; name: string; description: string; height: number | null; length: number | null; width: number | null; } | undefined> {

        const productId = req.params.id;

        try {
            const find = await this.productRepository.findById(productId);
            if (!find) {
                throw CustomError.badRequest('Producto no encontrado');
            }

            return find;
        } catch (error) {
            this.handleError(error, res);
        }
    }
}
