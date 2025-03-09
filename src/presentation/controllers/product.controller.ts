import { Request, Response } from 'express';
import productService from '../../application/services/product.service';

class ProductController {
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.create(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Inicio de sesión fallido', error });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.update(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Actualización fallida', error });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.delete(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Eliminación fallida', error });
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.get(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Obtención fallida', error });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.getAll(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Obtención fallida', error });
        }
    }

    public async getAllQuery(req: Request, res: Response): Promise<void> {
        try {
            const response = await productService.getAllQuery(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Obtención fallida', error });
        }
    }
}

export default new ProductController();
