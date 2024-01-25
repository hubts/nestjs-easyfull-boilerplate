/* eslint-disable @typescript-eslint/ban-types */
import { HttpStatus, Type } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

/**
 * API spec of method for swagger (OpenAPI used in Hasura).
 *
 * 'ApiOperation' defines a detail of method, such as summary, description, and name.
 * - This is used to specify the name of the method in OpenAPI.
 * - It is used as the name of the action when importing from Hasura.
 *
 * 'ApiResponse' defines a response of method.
 * - This is used to specify the status and type of response implemented.
 * - It is used as the response type of the action when importing from Hasura.
 *
 * @param type - Response type.
 * @param status - Response status code.
 */

export function ApiSpec(
    type?: Type<unknown> | Function | [Function] | string,
    status: number | "default" = HttpStatus.CREATED
) {
    return function (
        target: any,
        key: any,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        ApiOperation({
            operationId: key,
        })(target, key, descriptor as any);
        ApiResponse({
            type: type as any,
            status: status as any,
        })(target, key, descriptor as any);
        return descriptor;
    };
}
