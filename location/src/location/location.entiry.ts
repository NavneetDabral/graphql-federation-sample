import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'location' })
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_uuid: string;

  @Column()
  pincode: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  city: string;
}
