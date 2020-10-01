import { Controller, Body, Post } from '@nestjs/common';

import { UsersService } from '../users/users.service';

@Controller('customer-service')
export class CustomerServiceController {
  constructor(private usersService: UsersService) {}

  @Post('create-nasabah')
  async createNasabah(@Body() userData): Promise<any> {
    const nasabah = { ...userData, role: 'nasabah' };
    return this.usersService.create(nasabah);
  }
}
