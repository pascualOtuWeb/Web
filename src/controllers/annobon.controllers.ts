import { pool } from '../db/conDb'
import { Request, Response } from 'express'

//funcion para obtener a todos los profesores
export const getAnnobon = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `Annobon` ')
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
export const crearAnnobon = async (req: Request, res: Response) => {
    const { Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF } = req.body;

    try {
        const [rows] = await pool.query(
            'INSERT INTO Annobon ( Estudian, Docentes, CPrivados, CNacional, EstudianM, EstudianF) VALUES (?, ?, ?, ?, ?, ?)',
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

export const eliminarAnnobon = async (req: Request, res: Response) => {


    try {
        const [result] = await pool.query('DELETE  FROM Annobon  WHERE idAnnobon = ?', [req.params.idAnnobon])

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
