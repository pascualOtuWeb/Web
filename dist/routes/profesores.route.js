"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesores_Controllers_1 = require("../controllers/profesores.Controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const router = (0, express_1.Router)();
router.get('/profesor', valida_route_token_1.default, profesores_Controllers_1.getProfesores);
exports.default = router;
