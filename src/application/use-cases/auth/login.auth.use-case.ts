import { Bcrypt } from '../../../configurations/bcrypt';
import { Request, Response } from 'express';
import { CustomError } from '../../../configurations/customErrors';
import { AuthRepositoryInterface } from '../../../domain/interfaces/auth.repository.interface';

export class LoginAuthUseCase {

    constructor(private readonly authRepository: AuthRepositoryInterface) { }

    public async execute(req: Request, res: Response): Promise<{ userId: string } | undefined> {
        const { email, passwordHash } = req.body;

        try {

            // Buscar usuario en la base de datos
            const user = await this.authRepository.findByEmail(email);

            // Si el usuario no existe
            if (!user) {
                throw CustomError.badRequest('Usuario no encontrado');
            }

            // Verificar que la contraseña sea válida
            const isPasswordValid = await Bcrypt.compare(passwordHash, user.passwordHash);

            if (!isPasswordValid) {
                throw CustomError.badRequest('Contraseña incorrecta');
            }

            return { userId: user.id };

        } catch (error) {
            throw error;
        }
    }
}
