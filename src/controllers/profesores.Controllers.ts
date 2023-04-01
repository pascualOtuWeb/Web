import { pool } from '../db/conDb'
import { Request, Response } from 'express'

//funcion para obtener a todos los profesores
export const getProfesores = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `ProfCPF` ORDER BY NomProfCPF')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'Servicio no disponible'
        })

    }
}

