import { ResponseDto } from "src/common/dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import {
    IUpdatePasswordInput,
    IUpdatePasswordOutput,
    SUCCESS_MESSAGE,
} from "src/shared/interface";
import { Random } from "src/shared/util";

export class UpdatePasswordBodyDto implements IUpdatePasswordInput {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: Random.lowercase() })
    originalPassword: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: Random.lowercase() })
    newPassword: string;
}

export class UpdatePasswordResponseData implements IUpdatePasswordOutput {
    @ApiProperty({ example: Random.uuid() })
    id: string;
}

export class UpdatePasswordResponseDto extends ResponseDto<UpdatePasswordResponseData> {
    message = SUCCESS_MESSAGE.USER.UPDATE_PASSWORD;
    data?: UpdatePasswordResponseData;
}
