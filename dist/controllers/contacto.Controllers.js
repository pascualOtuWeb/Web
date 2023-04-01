"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarMensage = void 0;
const conDb_1 = require("../db/conDb");
//funcion para obtener a todos los profesores
const enviarMensage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * INSERT INTO `contacto` (`idContacto`, `nombre`, `apelido`, `email`, `objetoM`, `mensaje`) VALUES
     * (NULL, 'pas', 'jeo', 'aqz@gmail.com', 'Solicitud', 'Buenas Tardes\r\npor medio de esta peticion ');
     */
    const { nombre, apelido, email, objetoM, mensaje } = req.body;
    try {
        const [rows] = yield conDb_1.pool.query('INSERT INTO `contacto` (`nombre`, `apelido`, `email`, `objetoM`, `mensaje`) VALUES (?,?,?,?,?) ', ([nombre, apelido, email, objetoM, mensaje]));
        return res.json({
            msg: ` ${nombre} vuetro mensaje a sido enviado exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Upp ocurior un error`
        });
    }
});
exports.enviarMensage = enviarMensage;
