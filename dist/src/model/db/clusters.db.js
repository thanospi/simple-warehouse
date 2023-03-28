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
exports.clustersDB = void 0;
const Clusters_1 = require("../entity/Clusters");
// import { pool } from '../postgres-connect';
const postgres_connect_1 = require("../postgres-connect");
exports.clustersDB = {};
const clusterRepository = postgres_connect_1.AppDataSource.getRepository(Clusters_1.Clusters);
// get clusters
exports.clustersDB.getClusters = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        // SELECT *
        // FROM clusters
        // `);
        // const rows = await clusterRepository.find();
        const rows = yield clusterRepository.find({
            relations: {
                driverInfo: true
            }
        });
        return rows;
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// create one cluster
exports.clustersDB.createOne = (cluster) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        // INSERT INTO clusters
        // VALUES ('${cluster.name}', '${cluster.postcode}')
        // `);
        const new_cluster = new Clusters_1.Clusters();
        new_cluster.name = cluster.name;
        new_cluster.postcode = cluster.postcode;
        const rows = yield clusterRepository.save(new_cluster);
        return rows;
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// update a cluster
exports.clustersDB.updateOne = (cluster) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        //   UPDATE clusters
        //   SET
        //     name = '${cluster.newName}',
        //     postcode = '${cluster.postcode}'
        //   WHERE name = '${cluster.name}'
        //   `);
        const clusterToUpdate = yield clusterRepository.findOneBy({
            name: cluster.name
        });
        if (clusterToUpdate) {
            clusterToUpdate.name = cluster.newName;
            clusterToUpdate.postcode = cluster.postcode;
            const updatedDriver = clusterRepository.save(clusterToUpdate);
            return updatedDriver;
        }
        return '';
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// delete a cluster
exports.clustersDB.deleteOne = (clusterName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { rows } = await pool.query(`
        //     DELETE FROM clusters
        //     WHERE name = '${clusterName}'
        //     `);
        const clusterToRemove = yield clusterRepository.findOneBy({
            name: clusterName
        });
        if (clusterToRemove) {
            const removedCluster = yield clusterRepository.remove(clusterToRemove);
            return removedCluster;
        }
        return '';
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
