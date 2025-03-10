import { Jwt } from './../../../configurations/jwt';
// import prisma from "../../../infrastructure/database/prisma.service";
import { RefreshTokenInterfaceDto } from "../../dtos/refresToken.interface.dto";
import { randomBytes } from "crypto";
import moment from 'moment';
import { Request, Response } from 'express';
import { CustomError } from '../../../configurations/customErrors';
import { AuthRepositoryInterface } from '../../../domain/interfaces/auth.repository.interface';
import { RefreshTokenRepositoryInterface } from '../../../domain/interfaces/refreshToken.repository.interface';

export class CreateRefreshTokenAuthCase {

    constructor(private readonly authRepository: AuthRepositoryInterface, private readonly refreshTokenRepository: RefreshTokenRepositoryInterface) { }

    public async execute(userId: string, req: Request, res: Response): Promise<RefreshTokenInterfaceDto> {

        try {
            // Buscar usuario en la base de datos
            const user = await this.authRepository.findById(userId);

            // Si el usuario no existe
            if (!user) {
                throw CustomError.badRequest('Usuario no encontrado');
            }

            // Generar token
            const newAccessToken = await this.generateToken(user, req, res);
            const newRefreshTokenValue = randomBytes(64).toString('hex');

            this.handleRefreshTokens(user.id, newRefreshTokenValue);

            if (!newAccessToken) {
                throw CustomError.internalServerError('Token no generado');
            }

            return { refreshToken: newRefreshTokenValue };
        } catch (error) {
            throw error;
        }
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
            throw error;
        }
    }

    private async handleRefreshTokens(userId: string, token: string): Promise<void> {
        try {
            const expiresAt = moment().add(7, 'days').toDate();
            const tokens = await this.refreshTokenRepository.findByAuthId(userId);

            if (tokens.length >= 5) {
                await this.deleteOldestToken(tokens);
            }

            await this.refreshTokenRepository.create({
                token,
                authId: userId,
                expiresAt
            });
        } catch (error) {
            throw new Error('Crear token de refresco falló');
        }
    }

    private async deleteOldestToken(tokens: any[]): Promise<void> {
        try {
            const oldestToken = tokens.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())[0];
            await this.refreshTokenRepository.delete(oldestToken.id);
        } catch (error) {
            throw new Error('Eliminar token de refresco falló');
        }
    }
}
