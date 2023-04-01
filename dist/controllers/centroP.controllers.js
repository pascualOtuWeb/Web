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
exports.eliminarCentro = exports.getCentro = exports.crearCentro = void 0;
const conDb_1 = require("../db/conDb");
/***
 * Funcion para insertar un centro privado con toos los datos necesarios
 */
const crearCentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado } = req.body;
    try {
        const [rows] = yield conDb_1.pool.query('INSERT INTO CentroPrivado (Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado]);
        console.log(req.body);
        res.send({
            Nombre,
            Ciudad,
            Barrio,
            profesor,
            alumnos,
            licenciados,
            Master,
            Doctorado,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible',
        });
    }
});
exports.crearCentro = crearCentro;
/***
 * funcion para obtener a todos los centros
 */
const getCentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield conDb_1.pool.query('SELECT * FROM `CentroPrivado` ORDER BY Nombre');
        res.json(rows);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        });
    }
});
exports.getCentro = getCentro;
/***
 * funcion para obtener un solo centro
 */
/*
export const getCentrot = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `CentroPrivado`  WHERE idCentro = ?', [req.params.idCentro])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        })

    }
}


/***
 * funcion eliminar un centro
 */
const eliminarCentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield conDb_1.pool.query('DELETE  FROM CentroPrivado  WHERE idCentro = ?', [req.params.idCentro]);
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
exports.eliminarCentro = eliminarCentro;
