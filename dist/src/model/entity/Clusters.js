"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clusters = void 0;
const typeorm_1 = require("typeorm");
const Drivers_1 = require("./Drivers");
let Clusters = class Clusters {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 })
], Clusters.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true })
], Clusters.prototype, "postcode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Drivers_1.Drivers, (driver) => driver.clusterID, { eager: true })
], Clusters.prototype, "driverInfo", void 0);
Clusters = __decorate([
    (0, typeorm_1.Entity)()
], Clusters);
exports.Clusters = Clusters;
