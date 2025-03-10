import { CustomError } from './../../configurations/customErrors';
import { Request, Response } from 'express';
import productService from '../../application/services/product.service';

class ProductController {

    private static handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        // console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Error interno del servidor' })
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.create(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.update(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.delete(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.get(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.getAll(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }

    public async getAllQuery(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.getAllQuery(req, res);
            res.status(200).send(response);
        } catch (error) {
            ProductController.handleError(error, res);
        }
    }
}

export default new ProductController();
