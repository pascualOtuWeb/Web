"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mikomiseng_controllers_1 = require("../controllers/mikomiseng.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/mikomiseng', valida_route_token_1.default, mikomiseng_controllers_1.getMikomiseng);
router.post('/mikomiseng', valida_route_token_1.default, mikomiseng_controllers_1.crearMikomiseng);
router.delete('/mikomiseng/:idMikomiseng', valida_route_token_1.default, mikomiseng_controllers_1.eliminarMikomiseng);
exports.default = router;
