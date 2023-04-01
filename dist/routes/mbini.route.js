"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mbini_controllers_1 = require("../controllers/mbini.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/mbini', valida_route_token_1.default, mbini_controllers_1.getMbini);
router.post('/mbini', valida_route_token_1.default, mbini_controllers_1.crearMbini);
router.delete('/mbini/:idMbini', valida_route_token_1.default, mbini_controllers_1.eliminarMbini);
exports.default = router;
