import { IsString , IsEmail, IsMobilePhone, MinLength} from "class-validator"
import { IsEqualTo } from "src/decorators/match.decorator"
export class CreateAccountDto {
    @IsEmail()
    email : string

    @IsString()
    @MinLength(5, { message: "5글자 이상 입력해주세요" })
    password: string;

    @IsString()
    @IsEqualTo("password")
    confirmPassword: string;

    @IsString()
    name : string

    @IsMobilePhone("ko-KR")
    phonenumber : string

}
