import { Module } from '@nestjs/common';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { TellerController } from './teller.controller';

@Module({
  imports: [TransactionsModule],
  controllers: [TellerController],
})
export class TellerModule {}
