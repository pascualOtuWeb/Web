"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cogo_controllers_1 = require("../controllers/cogo.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/cogo', valida_route_token_1.default, cogo_controllers_1.getCogo);
router.post('/cogo', valida_route_token_1.default, cogo_controllers_1.crearCogo);
router.delete('/cogo/:idCogo', valida_route_token_1.default, cogo_controllers_1.eliminarCogo);
exports.default = router;
