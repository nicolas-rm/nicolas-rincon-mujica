export class AuthEntity {
    constructor(
        public id: string,
        public createdAt: Date,
        public updatedAt: Date,
        public email: string,
        public passwordHash: string,
        public userId: string | null,
    ) {}
}
