import { AuthEntity } from '../entities/index.entity';

export abstract class AuthRepositoryInterface {
    abstract create(auth: Partial<AuthEntity>): Promise<AuthEntity>;
    abstract findAll(): Promise<AuthEntity[]>;
    abstract findById(id: string): Promise<AuthEntity | null>;
    abstract findByEmail(email: string): Promise<AuthEntity | null>;
    abstract update(id: string, auth: Partial<AuthEntity>): Promise<AuthEntity>;
    abstract delete(id: string): Promise<AuthEntity>;
}
