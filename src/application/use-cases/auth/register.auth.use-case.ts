import prisma from "../../../infrastructure/database/prisma.service"
import { CustomError } from "../../../configurations/customErrors"
import { Response, Request } from 'express'
import { Bcrypt } from "../../../configurations/bcrypt"
import { AuthRepositoryInterface } from '../../../domain/interfaces/auth.repository.interface';


export class RegisterAuthUseCase {

    constructor(private readonly authRepository: AuthRepositoryInterface) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Servidor fuera de servicio' })
    }

    public async execute(req: Request, res: Response): Promise<{ userId: string } | undefined> {
        const { email, passwordHash } = req.body;

        try {

            // Buscar usuario en la base de datos
            const user = await this.authRepository.findByEmail(email);

            // Si el usuario ya existe, lanzar un error
            if (user) {
                throw CustomError.badRequest('Usuario ya existe');
            }

            const passwordHashBcrypt = await Bcrypt.hash(passwordHash);

            // Crear usuario
            const newUser = await this.authRepository.create({ email, passwordHash: passwordHashBcrypt });

            return { userId: newUser.id };

        } catch (error) {
            this.handleError(error, res);
        }
    }
}
