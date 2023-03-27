// import { Pool } from 'pg';

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './entity/Users';
import { Orders } from './entity/Orders';
import { Drivers } from './entity/Drivers';
import { Clusters } from './entity/Clusters';

const connectInfo = () => {
  const config =
    process.env.NODE_ENV === 'test'
      ? JSON.parse(process.env.TEST_POSTGRES!)
      : JSON.parse(process.env.POSTGRES!);

  return config;
};

const db_info = connectInfo();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: db_info.host,
  port: db_info.port,
  username: db_info.user,
  password: db_info.password,
  database: db_info.database,
  synchronize: true,
  logging: false,
  entities: [Users, Orders, Clusters, Drivers],
  migrations: [],
  subscribers: []
});

AppDataSource.initialize();
