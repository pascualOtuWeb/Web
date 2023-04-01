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
exports.eliminarBata = exports.crearBata = exports.getBatacity = void 0;
const conDb_1 = require("../db/conDb");
//funcion para obtener a todos los profesores
const getBatacity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield conDb_1.pool.query('SELECT * FROM `Bata` ');
        res.json(rows);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        });
    }
});
exports.getBatacity = getBatacity;
/**
 *
 * @param req
 * @param res
 * @returns
 */
const crearBata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF } = req.body;
    try {
        const [rows] = yield conDb_1.pool.query('INSERT INTO Bata ( Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF) VALUES (?, ?, ?, ?, ?, ?)', [Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF]);
        // console.log(req.body);
        res.send({ Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible',
        });
    }
});
exports.crearBata = crearBata;
/***
 * funcion eliminar un centro
 */
const eliminarBata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield conDb_1.pool.query('DELETE  FROM Bata  WHERE idBata = ?', [req.params.idBata]);
        //res.sendStatus(204)
        /*
        return res.json({
            msg: `Centro eliminado  exitosamente`
        })*/
    }
    catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        });
    }
});
exports.eliminarBata = eliminarBata;
