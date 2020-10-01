import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() userData): Promise<any> {
    return this.usersService.create(userData);
  }
}
