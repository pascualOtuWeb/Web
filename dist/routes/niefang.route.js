"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const niefang_controllers_1 = require("../controllers/niefang.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/niefang', valida_route_token_1.default, niefang_controllers_1.getNiefang);
router.post('/niefang', valida_route_token_1.default, niefang_controllers_1.crearNiefang);
router.delete('/niefang/:idNiefang', valida_route_token_1.default, niefang_controllers_1.eliminarNiefang);
exports.default = router;
