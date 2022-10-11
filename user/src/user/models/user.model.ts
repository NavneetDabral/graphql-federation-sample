import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Location } from './location.model';

@ObjectType({ description: 'everything related to user' })
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  lastLogin: string;

  @Field((type) => Location)
  location?: Location;
}
