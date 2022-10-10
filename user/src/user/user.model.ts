import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'everything related to user' })
export class User {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  lastLogin: string;
}
