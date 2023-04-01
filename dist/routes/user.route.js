"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_Controllers_1 = require("../controllers/user.Controllers");
const login_Controllers_1 = require("../controllers/login.Controllers");
const profesores_Controllers_1 = require("../controllers/profesores.Controllers");
const valida_route_token_1 = __importDefault(require("./valida.route.token"));
const contacto_Controllers_1 = require("../controllers/contacto.Controllers");
const router = (0, express_1.Router)();
//aqui estan definidas las rutas para el acceso
router.post('/', user_Controllers_1.newUser);
router.post('/login', login_Controllers_1.loginUser);
router.get('/profesor', valida_route_token_1.default, profesores_Controllers_1.getProfesores);
router.post('/contacto', contacto_Controllers_1.enviarMensage);
exports.default = router;
