import { Controller, Post } from '@nestjs/common';

import { TransactionsService } from '../transactions/transactions.service';

@Controller('teller')
export class TellerController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('create-transaction')
  async createTransaction(transactionData): Promise<any> {
    return this.transactionsService.create(transactionData);
  }
}
