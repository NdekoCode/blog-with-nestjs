import { IsNotEmpty, IsString, MinLength } from 'class-validator';

import { LoginDto } from './login.dto';

export class SignupDto extends LoginDto {
  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  confirm_password: string;
}
