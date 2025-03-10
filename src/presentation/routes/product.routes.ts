import { Router } from 'express';
import productController from '../controllers/product.controller';
import { JoiMiddleware } from '../../shared/middlewares/joi.middleware';
import { createProductSchema, updateProductSchema, deleteProductSchema, getAllProductSchema, getAllProductSchemaQuery, getProductSchema } from '../dtos/product.dto';
import { TokenMiddleware } from '../../shared/middlewares/token.middleware';

class ProductRouter {
    // Este router nos permitirá configurar las rutas y asociar los middlewares correspondientes
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        // Creamos una instancia del middleware de validación pasándole el esquema para el body
        const JoinCreateProduct = new JoiMiddleware({ body: createProductSchema });
        const JoinUpdateProduct = new JoiMiddleware({ body: updateProductSchema });
        const JoinDeleteProduct = new JoiMiddleware({ params: deleteProductSchema });
        const JoinGetProduct = new JoiMiddleware({ params: getProductSchema });
        const JoinGetAllProduct = new JoiMiddleware({ query: getAllProductSchema });
        const JoinGetAllProductQuery = new JoiMiddleware({ query: getAllProductSchemaQuery });

        this.router.post('/crear', [TokenMiddleware.validateJwt, JoinCreateProduct.validate], productController.create);
        this.router.put('/actualizar/:id', [TokenMiddleware.validateJwt, JoinUpdateProduct.validate], productController.update);
        this.router.delete('/eliminar/:id', [TokenMiddleware.validateJwt, JoinDeleteProduct.validate], productController.delete);
        this.router.get('/obtener/:id', [TokenMiddleware.validateJwt, JoinGetProduct.validate], productController.get);
        this.router.get('/obtener', [TokenMiddleware.validateJwt, JoinGetAllProduct.validate], productController.getAll);
        this.router.get('/obtener-query', [TokenMiddleware.validateJwt, JoinGetAllProductQuery.validate], productController.getAllQuery);
    }
}

export default new ProductRouter().router;
