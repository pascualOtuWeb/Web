import { pool } from '../db/conDb'
import { Request, Response } from 'express';



/***
 * Funcion para insertar un centro privado con toos los datos necesarios
 */
export const crearCentro = async (req: Request, res: Response) => {
    const { Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado } = req.body;

    try {
        const [rows] = await pool.query(
            'INSERT INTO CentroPrivado (Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Nombre, Ciudad, Barrio, profesor, alumnos, licenciados, Master, Doctorado]
        );

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
    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible',
        });
    }
};


/***
 * funcion para obtener a todos los centros
 */
export const getCentro = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `CentroPrivado` ORDER BY Nombre')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        })

    }
}

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

export const eliminarCentro = async (req: Request, res: Response) => {


    try {
        const [result] = await pool.query('DELETE  FROM CentroPrivado  WHERE idCentro = ?', [req.params.idCentro])

        //res.sendStatus(204)
        /*
        return res.json({
            msg: `Centro eliminado  exitosamente`
        })*/
    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        })

    }
}

