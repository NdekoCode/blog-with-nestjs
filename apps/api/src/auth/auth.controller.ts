import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/signup')
  getSignup() {
    return 'Register page';
  }
  getLogin() {
    return 'Login page';
  }
}
