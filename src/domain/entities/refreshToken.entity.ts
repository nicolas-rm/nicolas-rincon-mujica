export class RefreshTokenEntity {
    constructor(
        public id: string,
        public createdAt: Date,
        public updatedAt: Date,
        public token: string,
        public authId: string,
        public expiresAt: Date,
    ) {}
}
