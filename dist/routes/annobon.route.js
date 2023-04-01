"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const annobon_controllers_1 = require("../controllers/annobon.controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/annobon', valida_route_token_1.default, annobon_controllers_1.getAnnobon);
router.post('/annobon', valida_route_token_1.default, annobon_controllers_1.crearAnnobon);
router.delete('/annobon/:idAnnobon', valida_route_token_1.default, annobon_controllers_1.eliminarAnnobon);
exports.default = router;
