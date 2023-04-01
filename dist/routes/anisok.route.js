"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anisok_controllers_1 = require("../controllers/anisok.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/anisok', valida_route_token_1.default, anisok_controllers_1.getAnisok);
router.post('/anisok', valida_route_token_1.default, anisok_controllers_1.crearAnisok);
router.delete('/anisok/:idAnisok', valida_route_token_1.default, anisok_controllers_1.eliminarAnisok);
exports.default = router;
