import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transactions } from './transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionsRepository: Repository<Transactions>,
  ) {}

  async create(transactionData): Promise<any> {
    return await this.transactionsRepository.save(transactionData);
  }

  async findAll(): Promise<any> {
    return await this.transactionsRepository.find();
  }
}
