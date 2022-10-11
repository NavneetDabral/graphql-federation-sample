import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "user_uuid")')
export class Location {
  @Field((type) => ID)
  @Directive('@external')
  user_uuid: number;

  @Field((type) => User)
  user?: User;
}
