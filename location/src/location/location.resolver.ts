import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './location.model';
import { LocationInput } from './location.input';
import { DeleteLocation } from './location.delete';

@Resolver()
export class LocationResolver {
  constructor(private locationService: LocationService) {}

  @Query(() => Location)
  async location(@Args('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Query(() => [Location])
  async locations() {
    return this.locationService.findAll();
  }

  @Mutation(() => DeleteLocation)
  async removeLocation(@Args('id') id: string) {
    return await this.locationService.remove(id);
  }

  @Mutation(() => Location)
  async addLocation(@Args('user') user: LocationInput) {
    return await this.locationService.create(user);
  }
}
