import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Clusters {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  postcode: string;
}
