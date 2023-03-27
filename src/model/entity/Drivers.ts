import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Drivers {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  cluster: string;
}
