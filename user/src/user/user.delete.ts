import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteUser {
  @Field()
  id: number;
}
