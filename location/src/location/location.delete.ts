import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteLocation {
  @Field()
  id: string;
}
