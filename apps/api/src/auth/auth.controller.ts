import { Body, Controller, Get, Post, Render } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
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

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return body;
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return body;
  }
}
