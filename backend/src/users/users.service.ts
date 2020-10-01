import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async create(userData): Promise<any> {
    const user = this.findByName(userData.name);

    if (user) {
      return user;
    }

    return await this.usersRepository.save(userData);
  }

  async findByName(name): Promise<any> {
    return await this.usersRepository.findOne({
      where: { name },
    });
  }

  async findAll(options): Promise<any> {
    return await this.usersRepository.find(options);
  }
}
