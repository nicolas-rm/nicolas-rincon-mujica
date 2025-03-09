import { AuthRepository } from './../../infrastructure/repositories/auth.repository';
import { RefreshTokenRepository } from './../../infrastructure/repositories/refreshToken.repository';
import { AccessTokenRepository } from './../../infrastructure/repositories/accessToken.repository';
import { Request, Response } from 'express';
import { CreateRefreshTokenAuthCase, LoginAuthUseCase, RegisterAuthUseCase } from '../use-cases/auth/auth-use-cases';
import { RefreshTokenInterfaceDto } from '../../application/dtos/refresToken.interface.dto';
import { CreateAccessTokenAuthCase } from '../use-cases/accessToken/createAccessToken.auth.use-case';

class AuthService {
    private loginUseCase: LoginAuthUseCase;
    private refreshTokenUseCase: CreateRefreshTokenAuthCase;
    private accessTokenUseCase: CreateAccessTokenAuthCase;
    private registerUseCase: RegisterAuthUseCase;

    constructor() {
        this.loginUseCase = new LoginAuthUseCase(new AuthRepository());
        this.refreshTokenUseCase = new CreateRefreshTokenAuthCase(new AuthRepository(), new RefreshTokenRepository);
        this.registerUseCase = new RegisterAuthUseCase(new AuthRepository());
        this.accessTokenUseCase = new CreateAccessTokenAuthCase(new AuthRepository(), new AccessTokenRepository());
    }

    public async register(req: Request, res: Response): Promise<{ userId: string } | undefined> {
        return this.registerUseCase.execute(req, res);
    }

    public async login(req: Request, res: Response): Promise<{ token: string, refreshToken: string } | null> {
        const response = await this.loginUseCase.execute(req, res);

        if (response) {

            const accessToken = await this.accessTokenUseCase.execute(response.userId, req, res);

            const refreshToken = await this.refreshTokenUseCase.execute(response.userId, req, res);
            return { token: accessToken.token, refreshToken: refreshToken.refreshToken };
        }
        return null;
    }
}

export default new AuthService();
