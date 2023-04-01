"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const luba_controllers_1 = require("../controllers/luba.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/luba', valida_route_token_1.default, luba_controllers_1.getLuba);
router.post('/luba', valida_route_token_1.default, luba_controllers_1.crearLuba);
router.delete('/luba/:idLuba', valida_route_token_1.default, luba_controllers_1.eliminarLuba);
exports.default = router;
