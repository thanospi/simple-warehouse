import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Clusters } from './Clusters';

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

  @ManyToOne(() => Clusters, (cluster) => cluster.name)
  @JoinColumn({ name: 'postcode_area', referencedColumnName: 'postcode' })
  clusterInfo: Clusters;
}
