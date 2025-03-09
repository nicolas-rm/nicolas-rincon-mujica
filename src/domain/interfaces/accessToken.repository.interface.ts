import { AccessTokenEntity } from "../entities/index.entity";

export abstract class AccessTokenRepositoryInterface {
    abstract create(refreshToken: Partial<AccessTokenEntity>): Promise<AccessTokenEntity>;
    abstract findAll(): Promise<AccessTokenEntity[]>;
    abstract findById(id: string): Promise<AccessTokenEntity | null>;
    abstract findByAuthId(authId: string): Promise<AccessTokenEntity[]>;
    abstract findByToken(token: string): Promise<AccessTokenEntity | null>;
    abstract update(id: string, refreshToken: Partial<AccessTokenEntity>): Promise<AccessTokenEntity>;
    abstract delete(id: string): Promise<AccessTokenEntity>;
}
