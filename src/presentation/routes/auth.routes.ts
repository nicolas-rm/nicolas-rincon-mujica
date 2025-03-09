import { loginSchema, registerSchema } from '../dtos/auth.dto';
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { JoiMiddleware } from '../../shared/middlewares/joi.middleware';

class AuthRouter {
    // Este router nos permitirá configurar las rutas y asociar los middlewares correspondientes
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        // Creamos una instancia del middleware de validación pasándole el esquema para el body
        const JoinAuthLogin = new JoiMiddleware({ body: loginSchema });
        const JoinAuthRegister = new JoiMiddleware({ body: registerSchema });

        this.router.post('/iniciar-sesion', JoinAuthLogin.validate, AuthController.login);
        this.router.post('/registrar', JoinAuthRegister.validate, AuthController.register);
    }
}

export default new AuthRouter().router;
