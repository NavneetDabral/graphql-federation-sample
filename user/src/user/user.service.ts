import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { DeleteUser } from './user.delete';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: UserInput): Promise<User> {
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<DeleteUser> {
    await this.usersRepository.delete(id);
    return { id };
  }
}
