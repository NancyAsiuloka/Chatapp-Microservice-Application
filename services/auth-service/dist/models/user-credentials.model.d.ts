import { Model, type Optional } from "sequelize";
export interface UserCredentialsAttributes {
    id: string;
    email: string;
    displayName: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}
export type UserCredentialsCreationAttributes = Optional<UserCredentialsAttributes, "id" | "createdAt" | "updatedAt">;
export declare class UserCredentials extends Model<UserCredentialsAttributes, UserCredentialsCreationAttributes> implements UserCredentialsAttributes {
    id: string;
    email: string;
    displayName: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=user-credentials.model.d.ts.map