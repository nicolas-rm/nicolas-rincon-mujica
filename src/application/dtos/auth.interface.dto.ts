export interface AuthInterfaceDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    passwordHash: string;
    userId?: string;
}
