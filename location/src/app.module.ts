import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { LocationResolver } from './location/location.resolver';
import { join } from 'path';
import { LocationService } from './location/location.service';
import { Location } from './location/location.entiry';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'user_location',
      entities: [Location],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Location]),
  ],
  providers: [LocationResolver, LocationService],
})
export class AppModule {}
