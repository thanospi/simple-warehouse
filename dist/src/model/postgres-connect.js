"use strict";
// import { Pool } from 'pg';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Users_1 = require("./entity/Users");
const Orders_1 = require("./entity/Orders");
const Drivers_1 = require("./entity/Drivers");
const Clusters_1 = require("./entity/Clusters");
const connectInfo = () => {
    const config = process.env.NODE_ENV === 'test'
        ? JSON.parse(process.env.TEST_POSTGRES)
        : JSON.parse(process.env.POSTGRES);
    return config;
};
const db_info = connectInfo();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: db_info.host,
    port: db_info.port,
    username: db_info.user,
    password: db_info.password,
    database: db_info.database,
    synchronize: true,
    logging: false,
    entities: [Users_1.Users, Orders_1.Orders, Clusters_1.Clusters, Drivers_1.Drivers],
    migrations: [],
    subscribers: []
});
exports.AppDataSource.initialize();
