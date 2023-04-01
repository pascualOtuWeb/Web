"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const centroP_controllers_1 = require("../controllers/centroP.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
//declaramos un contante para las rutas
const router = (0, express_1.Router)();
//route.use(express.json())
//creamos rutas para la tabla de los profesores
router.get('/centrop', valida_route_token_1.default, centroP_controllers_1.getCentro);
router.post('/centrop', valida_route_token_1.default, centroP_controllers_1.crearCentro);
router.delete('/centrop/:idCentro', valida_route_token_1.default, centroP_controllers_1.eliminarCentro);
exports.default = router;
