import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm';
import { Drivers } from './Drivers';

@Entity()
export class Clusters {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  postcode: string;

  @OneToOne(() => Drivers, (driver) => driver.clusterID, { eager: true })
  driverInfo: Drivers;
}
