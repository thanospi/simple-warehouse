import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Clusters } from './Clusters';

@Entity()
export class Drivers {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  cluster: string;

  @OneToOne(() => Clusters, (cluster) => cluster.name)
  @JoinColumn()
  clusterID: Clusters;
}
