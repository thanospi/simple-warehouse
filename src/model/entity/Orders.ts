import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  voucher: string;

  @Column({ type: 'varchar', length: 255 })
  postcode_area: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  postcode: string;

  @Column({ type: 'boolean', default: false })
  scanned: boolean;
}
