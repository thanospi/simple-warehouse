"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversDB = void 0;
const Drivers_1 = require("../entity/Drivers");
// import { pool } from '../postgres-connect';
const postgres_connect_1 = require("../postgres-connect");
exports.driversDB = {};
const driversRepository = postgres_connect_1.AppDataSource.getRepository(Drivers_1.Drivers);
// get drivers
exports.driversDB.getDrivers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   const { rows } = await pool.query(`
        //   SELECT *
        //   FROM drivers
        //   `);
        const rows = yield driversRepository.find();
        return rows;
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// create one driver
exports.driversDB.createOne = (driver) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        // INSERT INTO drivers
        // VALUES ('${driver.name}', '${driver.cluster}')
        // `);
        const new_driver = new Drivers_1.Drivers();
        new_driver.name = driver.name;
        new_driver.cluster = driver.cluster;
        const rows = yield driversRepository.save(new_driver);
        return rows;
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// update a driver
exports.driversDB.updateOne = (driver) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        //   UPDATE drivers
        //   SET
        //     name = '${driver.newName}',
        //     cluster = '${driver.cluster}'
        //   WHERE name = '${driver.name}'
        //   `);
        const driverToUpdate = yield driversRepository.findOneBy({
            name: driver.name
        });
        if (driverToUpdate) {
            driverToUpdate.name = driver.name;
            driverToUpdate.cluster = driver.cluster;
            const updatedDriver = driversRepository.save(driverToUpdate);
            return updatedDriver;
        }
        return '';
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
//delete a driver
exports.driversDB.deleteOne = (driverName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        //     DELETE FROM drivers
        //     WHERE name = '${driverName}'
        //     `);
        const driverToRemove = yield driversRepository.findOneBy({
            name: driverName
        });
        if (driverToRemove) {
            const removedDriver = yield driversRepository.remove(driverToRemove);
            return removedDriver;
        }
        return '';
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
