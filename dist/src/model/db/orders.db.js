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
exports.ordersDB = void 0;
const Orders_1 = require("../entity/Orders");
const postgres_connect_1 = require("../postgres-connect");
// import { pool } from '../postgres-connect';
exports.ordersDB = {};
const ordersRepository = postgres_connect_1.AppDataSource.getRepository(Orders_1.Orders);
// get orders
exports.ordersDB.getOrders = (parametersQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let whereSQLStringBuild = '';
    // build a string to represent the parameters of the Request,
    // as a WHERE condition will be injected in the SQL Query
    if (parametersQuery && parametersQuery.length) {
        whereSQLStringBuild += 'WHERE ';
        parametersQuery.forEach((condition) => {
            if (typeof condition.value === 'boolean')
                whereSQLStringBuild += `${condition.table}.${condition.column} = ${condition.value} AND `;
            else
                whereSQLStringBuild += `${condition.table}.${condition.column} = '${condition.value}' AND `;
        });
        whereSQLStringBuild = whereSQLStringBuild.slice(0, -4);
    }
    // console.log('whereSQLStringBuild', whereSQLStringBuild);
    try {
        // const { rows } = await pool.query(`
        // SELECT orders.voucher, orders.postcode_area, drivers.cluster, orders.postcode, drivers.name as driver, orders.scanned
        // FROM orders
        // LEFT JOIN clusters
        // ON postcode_area = clusters.postcode
        // LEFT JOIN drivers
        // ON clusters.name = drivers.cluster
        // ${parametersQuery ? whereSQLStringBuild : ''}
        // ORDER BY orders.voucher ASC
        // `);
        const rows = yield ordersRepository.find({
            relations: {
                clusterInfo: true
            }
        });
        return rows;
    }
    catch (error) {
        throw new Error(`'Database Error', ${error}`);
    }
});
// // // create one order
// ordersDB.createOne = async (order: Order) => {
//   try {
//     const { rows } = await pool.query(`
//     INSERT INTO orders
//     VALUES (
//       '${order.voucher}', '${order.postcode.slice(0, 2)}', '${order.postcode}
//       ')
//     `);
//     return rows;
//   } catch (error) {
//     throw new Error(`'Database Error', ${error}`);
//   }
// };
// // update an order row
// ordersDB.updateOne = async (order: Order) => {
//   try {
//     const { rows } = await pool.query(`
//       UPDATE orders
//       SET
//         voucher = '${order.voucher}',
//         postcode_area ='${order.postcode.slice(0, 2)}',
//         postcode = '${order.postcode}',
//         scanned = '${order.scanned}'
//       WHERE voucher = '${order.voucher}'
//       `);
//     return rows;
//   } catch (error) {
//     throw new Error(`'Database Error', ${error}`);
//   }
// };
// // update scanned column of orders (means that the package is ready)
// ordersDB.updateScanned = async (order: Order) => {
//   try {
//     const { rows, rowCount } = await pool.query(`
//       UPDATE orders
//       SET
//         scanned = '${order.scanned}'
//       WHERE voucher = '${order.voucher}'
//       `);
//     if (rowCount === 0) throw new Error(`This voucher wasnt found`);
//     return rows;
//   } catch (error) {
//     throw new Error(`'Database Error', ${error}`);
//   }
// };
// //delete an order
// ordersDB.deleteOne = async (orderVoucher: string) => {
//   try {
//     const { rows } = await pool.query(`
//         DELETE FROM orders
//         WHERE voucher = '${orderVoucher}'
//         `);
//     return rows;
//   } catch (error) {
//     throw new Error(`'Database Error', ${error}`);
//   }
// };
