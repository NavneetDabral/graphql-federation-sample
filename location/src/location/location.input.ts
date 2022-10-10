import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class LocationInput {
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
