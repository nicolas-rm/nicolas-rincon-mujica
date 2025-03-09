import { RefreshTokenEntity } from "../entities/index.entity";

export abstract class RefreshTokenRepositoryInterface {
    abstract create(refreshToken: Partial<RefreshTokenEntity>): Promise<RefreshTokenEntity>;
    abstract findAll(): Promise<RefreshTokenEntity[]>;
    abstract findById(id: string): Promise<RefreshTokenEntity | null>;
    abstract findByAuthId(authId: string): Promise<RefreshTokenEntity[]>;
    abstract findByToken(token: string): Promise<RefreshTokenEntity | null>;
    abstract update(id: string, refreshToken: Partial<RefreshTokenEntity>): Promise<RefreshTokenEntity>;
    abstract delete(id: string): Promise<RefreshTokenEntity>;
}
