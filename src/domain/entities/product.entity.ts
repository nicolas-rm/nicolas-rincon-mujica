export class ProductEntity {
    // id          String   @id @default(uuid())
    // createdAt   DateTime @default(now())
    // updatedAt   DateTime @updatedAt
    // name        String
    // description String
    // height      Float?
    // length      Float?
    // width       Float?
    constructor(
        public id: string,
        public createdAt: Date,
        public updatedAt: Date,
        public name: string,
        public description: string,
        public height: number | null,
        public length: number | null,
        public width: number  | null,
    ) {}
}
