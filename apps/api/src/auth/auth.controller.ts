import { Controller, Get, Render } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/signup')
  @Render('auth/signup')
  getSignup() {
    return { title: 'Register page' };
  }
  getLogin() {
    return 'Login page';
  }
}
