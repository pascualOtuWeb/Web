"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bata_controllers_1 = require("../controllers/bata.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/bata', valida_route_token_1.default, bata_controllers_1.getBatacity);
router.post('/bata', valida_route_token_1.default, bata_controllers_1.crearBata);
router.delete('/bata/:idBata', valida_route_token_1.default, bata_controllers_1.eliminarBata);
exports.default = router;
