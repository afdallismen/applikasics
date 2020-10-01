import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { BackOfficeController } from './back_office.controller';

@Module({
  imports: [UsersModule, TransactionsModule],
  controllers: [BackOfficeController],
})
export class BackOfficeModule {}
