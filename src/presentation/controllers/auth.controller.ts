import { Request, Response } from 'express';
import authService from '../../application/services/auth.service';

class AuthController {
    public async login(req: Request, res: Response): Promise<void> {
        try {
            const response = await authService.login(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Inicio de sesión fallido', error });
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const response = await authService.register(req, res);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send({ message: 'Registro fallido', error });
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        try {
            res.status(200).send({ message: 'Logout successful' });
        } catch (error) {
            res.status(500).send({ message: 'Logout failed', error });
        }
    }
}

export default new AuthController();
