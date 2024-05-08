import { IUser } from "../entity/user";
import { UserRole } from "../enum/user-role.enum";
import { IActionRoute } from "../interface/action-route.type";
import { IResponse } from "../response/response.interface";

export const UserRoute: IActionRoute<IUserAction> = {
    prefix: "users",
    subPath: {
        updatePassword: {
            name: "update-password",
            roles: [UserRole.USER],
        },
    },
};

export interface IUserAction {
    updatePassword: (
        user: IUser,
        input: IUpdatePasswordInput
    ) => Promise<IResponse>;
}

export interface IUpdatePasswordInput {
    originalPassword: string;
    newPassword: string;
}