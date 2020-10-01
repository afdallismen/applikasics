import { Module } from '@nestjs/common';

import { CustomerServiceController } from './customer_service.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [CustomerServiceController],
})
export class CustomerServiceModule {}
