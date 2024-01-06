import { IsString , IsEmail, IsMobilePhone, MinLength} from "class-validator"
import { IsEqualTo } from "src/decorators/match.decorator"
export class LoginAccountDto {
    @IsEmail()
    email : string

    @IsString()
    password: string;

}
