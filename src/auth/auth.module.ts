import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { SigninService } from './signin/signin.service';
import { SigninController } from './signin/signin.controller';

@Module({
  controllers: [SignupController, SigninController],
  providers: [SignupService, SigninService],
})
export class AuthModule {}
