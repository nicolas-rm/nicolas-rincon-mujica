export interface ProductInterfaceDto {
    // id          String   @id @default(uuid())
    // createdAt   DateTime @default(now())
    // updatedAt   DateTime @updatedAt
    // name        String
    // description String
    // height      Float?
    // length      Float?
    // width       Float?

    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    height?: number;
    length?: number;
    width?: number;
}
