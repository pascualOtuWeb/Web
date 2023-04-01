"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacto_Controllers_1 = require("../controllers/contacto.Controllers");
//declaracion de la variable
const router = (0, express_1.Router)();
router.post('/contacto', contacto_Controllers_1.enviarMensage);
exports.default = router;
