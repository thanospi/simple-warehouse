"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clustersRouter = void 0;
const express_1 = require("express");
const clusters_controller_1 = require("../../controller/clusters.controller");
const auth_middleware_1 = require("../../auth/auth-middleware");
exports.clustersRouter = (0, express_1.Router)();
exports.clustersRouter.get('/', auth_middleware_1.authMiddleware, clusters_controller_1.getClusters);
exports.clustersRouter.post('/', auth_middleware_1.authMiddleware, clusters_controller_1.postClusters);
exports.clustersRouter.put('/', auth_middleware_1.authMiddleware, clusters_controller_1.putClusters);
exports.clustersRouter.delete('/', auth_middleware_1.authMiddleware, clusters_controller_1.deleteClusters);