import {
  Args,
  Query,
  Resolver,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './models/user.model';
import { UserInput } from './user.input';
import { DeleteUser } from './user.delete';
import { Location } from './models/location.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => DeleteUser)
  async removeUser(@Args('id') id: number) {
    return await this.userService.remove(id);
  }

  @Mutation(() => User)
  async addUser(@Args('user') user: UserInput) {
    return await this.userService.create(user);
  }

  @ResolveField((of) => Location)
  location(@Parent() user: User): any {
    return { __typename: 'Location', user_uuid: user.id };
  }
}
