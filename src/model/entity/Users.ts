import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  _id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;
}
