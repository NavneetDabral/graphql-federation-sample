import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'everything related to user location goes here' })
@Directive('@key(fields: "user_uuid")')
export class Location {
  @Field((type) => ID)
  id: number;

  @Field((type) => ID)
  user_uuid: number;

  @Field()
  pincode: string;

  @Field()
  state: string;

  @Field()
  country: string;

  @Field()
  city: string;
}
