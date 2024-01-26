import { Status } from "./category.model";
import { RoleModel } from "./role.model";

export interface UserModel{
    id: string;
    name: string;
    email: string;
    password: string;
    role: RoleModel;
    status: Status;
}
