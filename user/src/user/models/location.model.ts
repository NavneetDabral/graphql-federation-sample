import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "user_uuid")')
export class Location {
  @Field((type) => ID)
  @Directive('@external')
  user_uuid: number;
}
