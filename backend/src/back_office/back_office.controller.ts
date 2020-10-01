import { Controller, Get } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { TransactionsService } from '../transactions/transactions.service';

@Controller('back-office')
export class BackOfficeController {
  constructor(
    private usersService: UsersService,
    private transactionsService: TransactionsService,
  ) {}

  @Get('transactions')
  async findTransactions() {
    return this.transactionsService.findAll();
  }

  @Get('nasabah')
  async findNasabah() {
    return this.usersService.findAll({ where: { role: 'nasabah' } });
  }
}
