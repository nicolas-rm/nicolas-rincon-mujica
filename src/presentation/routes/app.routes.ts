// Todas las rutas de la aplicación

import { Router } from "express";
import AuthRoutes from "./auth.routes";
import ProductRoutes from "./product.routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        // Definir las rutas
        router.use('/api/auth', AuthRoutes)
        router.use('/api/products', ProductRoutes)


        return router
    }

}

export default AppRoutes;
