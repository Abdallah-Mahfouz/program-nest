import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private _AppService: AppService) {}
  @Get()
  hamada() {
    return this._AppService.getAllUsers();
  }
  
}
