import { Router } from 'express';
import productController from '../controllers/product.controller';
import { JoiMiddleware } from '../../shared/middlewares/joi.middleware';
import { createProductSchema, updateProductSchema, deleteProductSchema, getAllProductSchema, getAllProductSchemaQuery, getProductSchema } from '../dtos/product.dto';

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
        const JoinDeleteProduct = new JoiMiddleware({ body: deleteProductSchema });
        const JoinGetProduct = new JoiMiddleware({ params: getProductSchema });
        const JoinGetAllProduct = new JoiMiddleware({ query: getAllProductSchema });
        const JoinGetAllProductQuery = new JoiMiddleware({ query: getAllProductSchemaQuery });

        this.router.post('/crear', JoinCreateProduct.validate, productController.create);
        this.router.put('/actualizar', JoinUpdateProduct.validate, productController.update);
        this.router.delete('/eliminar', JoinDeleteProduct.validate, productController.delete);
        this.router.get('/obtener/:id', JoinGetProduct.validate, productController.get);
        this.router.get('/obtener', JoinGetAllProduct.validate, productController.getAll);
        this.router.get('/obtener-query', JoinGetAllProductQuery.validate, productController.getAllQuery);
    }
}

export default new ProductRouter().router;
