import { Request, Response } from 'express';
import authService from '../../application/services/auth.service';
import { CustomError } from '../../configurations/customErrors';

class AuthController {

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Servidor fuera de servicio' })
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const response = await authService.login(req, res);
            res.status(200).send(response);
        } catch (error) {
            console.log(error)
            if (error instanceof CustomError) {
                throw error;
            }

            this.handleError(error, res);
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const response = await authService.register(req, res);
            res.status(200).send(response);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        try {
            res.status(200).send({ message: 'Logout successful' });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}

export default new AuthController();
