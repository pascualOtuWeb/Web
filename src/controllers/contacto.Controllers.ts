import { pool } from "../db/conDb"
import { Request, Response } from "express";


//funcion para obtener a todos los profesores
export const enviarMensage = async (req: Request, res: Response) => {
    /**
     * INSERT INTO `contacto` (`idContacto`, `nombre`, `apelido`, `email`, `objetoM`, `mensaje`) VALUES 
     * (NULL, 'pas', 'jeo', 'aqz@gmail.com', 'Solicitud', 'Buenas Tardes\r\npor medio de esta peticion ');
     */

    const { nombre, apelido, email, objetoM, mensaje } = req.body

    try {
        const [rows] = await pool.query('INSERT INTO `contacto` (`nombre`, `apelido`, `email`, `objetoM`, `mensaje`) VALUES (?,?,?,?,?) ', ([nombre, apelido, email, objetoM, mensaje]))
        return res.json({
            msg: ` ${nombre} vuetro mensaje a sido enviado exitosamente`
        })

    } catch (error) {
        res.status(400).json({
            msg: `Upp ocurior un error`
        })
    }


}