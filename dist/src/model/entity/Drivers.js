"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drivers = void 0;
const typeorm_1 = require("typeorm");
const Clusters_1 = require("./Clusters");
let Drivers = class Drivers {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 })
], Drivers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true })
], Drivers.prototype, "cluster", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Clusters_1.Clusters, (cluster) => cluster.name),
    (0, typeorm_1.JoinColumn)()
], Drivers.prototype, "clusterID", void 0);
Drivers = __decorate([
    (0, typeorm_1.Entity)()
], Drivers);
exports.Drivers = Drivers;
