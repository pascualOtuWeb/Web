import { pool } from '../db/conDb'
import { Request, Response } from 'express'

//funcion para obtener a todos los profesores
export const getCogo = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `Cogo` ')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        })

    }
}
/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const crearCogo = async (req: Request, res: Response) => {
    const { Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF } = req.body;

    try {
        const [rows] = await pool.query(
            'INSERT INTO Cogo ( Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF) VALUES (?, ?, ?, ?, ?, ?)',
            [Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF]
        );

        // console.log(req.body);

        res.send({ Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF });
    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible',
        });
    }
};




/***
 * funcion eliminar un centro
 */

export const eliminarCogo = async (req: Request, res: Response) => {


    try {
        const [result] = await pool.query('DELETE  FROM Cogo  WHERE idCogo= ?', [req.params.idCogo])

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
