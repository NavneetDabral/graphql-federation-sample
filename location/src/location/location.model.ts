import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'everything related to user location goes here' })
export class Location {
  @Field((type) => ID)
  id: string;

  @Field()
  user_uuid: string;

  @Field()
  pincode: string;

  @Field()
  state: string;

  @Field()
  country: string;

  @Field()
  city: string;
}
