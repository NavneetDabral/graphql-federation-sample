import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteLocation } from './location.delete';
import { Location } from './location.entiry';
import { LocationInput } from './location.input';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  create(user: LocationInput): Promise<Location> {
    return this.locationRepository.save(user);
  }

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: number): Promise<Location> {
    return this.locationRepository.findOneBy({ user_uuid: id });
  }

  async remove(id: number): Promise<DeleteLocation> {
    await this.locationRepository.delete(id);
    return { id };
  }
}
