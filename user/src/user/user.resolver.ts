import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './user.model';
import { UserInput } from './user.input';
import { DeleteUser } from './user.delete';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => DeleteUser)
  async removeUser(@Args('id') id: string) {
    return await this.userService.remove(id);
  }

  @Mutation(() => User)
  async addUser(@Args('user') user: UserInput) {
    return await this.userService.create(user);
  }
}
