"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const malabo_controllers_1 = require("../controllers/malabo.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/malabo', valida_route_token_1.default, malabo_controllers_1.getMalabo);
router.post('/malabo', valida_route_token_1.default, malabo_controllers_1.crearMalabo);
router.delete('/malabo/:idMalabo', valida_route_token_1.default, malabo_controllers_1.eliminarMalabo);
exports.default = router;
