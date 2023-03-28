// import { Pool } from 'pg';

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './entity/Users';
import { Orders } from './entity/Orders';
import { Drivers } from './entity/Drivers';
import { Clusters } from './entity/Clusters';

const connectInfo = () => {
  let config: any = {};

  if (process.env.NODE_ENV === 'test') {
    console.log('use test_pg configs');
  } else {
    console.log('config is set');
    config.host = 'localhost';
    config.user = 'postgres';
    config.password = 'postgres';
    config.database = 'skroutz';
    config.port = 5442;
  }

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
  // entities: [`src/model/entity/**/*.ts`],
  migrations: ['dist/src/model/migrations/*.js'],
  subscribers: []
});

AppDataSource.initialize();
