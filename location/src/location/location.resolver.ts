import {
  Args,
  Query,
  Resolver,
  Mutation,
  ResolveReference,
} from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './model/location.model';
import { LocationInput } from './location.input';
import { DeleteLocation } from './location.delete';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private locationService: LocationService) {}

  @Query(() => Location)
  async location(@Args('id') id: number) {
    return this.locationService.findOne(id);
  }

  @Query(() => [Location])
  async locations() {
    return this.locationService.findAll();
  }

  @Mutation(() => DeleteLocation)
  async removeLocation(@Args('id') id: number) {
    return await this.locationService.remove(id);
  }

  @Mutation(() => Location)
  async addLocation(@Args('user') user: LocationInput) {
    return await this.locationService.create(user);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    user_uuid: number;
  }): Promise<Location> {
    return await this.locationService.findOne(reference.user_uuid);
  }
}
