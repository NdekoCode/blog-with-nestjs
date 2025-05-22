import { Controller, Get, Render } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('signup')
  @Render('auth/signup')
  getSignup() {
    return { title: 'Register page' };
  }
  @Get('login')
  @Render('auth/login')
  getLogin() {
    return { title: 'Login page' };
  }
}
