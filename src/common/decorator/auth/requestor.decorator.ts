import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { UserModel } from "src/module/user/domain/model/user.model";

/**
 * Decorator used to specify who is granted access.
 */
export const Requestor = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest() as Request & {
            user: UserModel;
        };
        return request.user;
    }
);
