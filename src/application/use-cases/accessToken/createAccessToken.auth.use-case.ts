// import prisma from "../../../infrastructure/database/prisma.service";
import { AccessTokenInterfaceDto } from "../../dtos/accessToken.interface.dto";
import { Jwt } from "../../../configurations/jwt";
import { randomBytes } from "crypto";
import moment from 'moment';
import { Request, Response } from 'express';
import { CustomError } from '../../../configurations/customErrors';
import { AuthRepositoryInterface } from '../../../domain/interfaces/auth.repository.interface';
import { AccessTokenRepositoryInterface } from '../../../domain/interfaces/accessToken.repository.interface';

export class CreateAccessTokenAuthCase {

    constructor(private readonly authRepository: AuthRepositoryInterface, private readonly accessTokenRepository: AccessTokenRepositoryInterface) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Servidor fuera de servicio' })
    }

    public async execute(userId: string, req: Request, res: Response): Promise<AccessTokenInterfaceDto> {

        // Buscar usuario en la base de datos
        const user = await this.authRepository.findById(userId);

        // Si el usuario no existe
        if (!user) {
            throw CustomError.badRequest('Usuario no encontrado');
        }

        // Generar token
        const newAccessToken = await this.generateToken(user, req, res);

        if (!newAccessToken) {
            throw CustomError.internalServerError('Token no generado');
        }

        this.handleAccessTokens(user.id, newAccessToken, res);

        if (!newAccessToken) {
            throw CustomError.internalServerError('Token no generado');
        }

        return { token: newAccessToken };
    }

    private async generateToken(user: any, req: Request, res: Response): Promise<string | undefined> {
        try {
            const payload = { sub: user.id, email: user.email };
            const response = await Jwt.sing(payload);

            if (!response) {
                throw CustomError.internalServerError('Token no generado');
            }

            return response;

        } catch (error) {
            this.handleError(error, res);
        }
    }

    private async handleAccessTokens(userId: string, token: string, res: Response): Promise<void> {
        try {
            // const expiresAt = moment().add(1, 'hours').toDate();
            const tokens = await this.accessTokenRepository.findByAuthId(userId);

            if (tokens.length >= 5) {
                await this.deleteOldestToken(tokens, res);
            }

            await this.accessTokenRepository.create({
                token,
                authId: userId,
                // expiresAt
            });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    private async deleteOldestToken(tokens: any[], res: Response): Promise<void> {
        try {
            const oldestToken = tokens.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
            await this.accessTokenRepository.delete(oldestToken.id);
        } catch (error) {
            this.handleError(error, res);
        }
    }
}
