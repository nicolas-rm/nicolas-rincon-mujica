import { CustomError } from '../../../configurations/customErrors';
import { Response, Request } from 'express';
import { ProductRepositoryInterface } from '../../../domain/interfaces/product.repository.interface';

export class GetAllProductUseCase {

    constructor(private readonly productRepository: ProductRepositoryInterface) { }

    public async execute(req: Request, res: Response): Promise<{ id: string; createdAt: Date; updatedAt: Date; name: string; description: string; height: number | null; length: number | null; width: number | null; }[] | undefined> {
        try {
            return await this.productRepository.findAll();
        } catch (error) {
            throw error
        }
    }
}
