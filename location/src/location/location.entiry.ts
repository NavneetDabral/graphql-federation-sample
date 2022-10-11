import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'location' })
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_uuid: number;

  @Column()
  pincode: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  city: string;
}
