import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { pool } from "../db/conDb";

export const newUser = async (req: Request, res: Response) => {
    /**
     * INSERT INTO `UsuarioAPP` (`idusp`, `userName`, `email`, `password`) VALUES 
     * (NULL, 'Raquel', 'raquel@gmail.com', '1234');
     */

    const { userName, email, password } = req.body
    console.log(userName, email, password)
    //ciframos la contrasena
    //const hashedPassword = await bcrypt.hash(password, 10)
    //console.log(hashedPassword)

    //validamos si el usuario existe en la base de datos
    //SELECT * FROM `UsuarioAPP` WHERE userName = userName
    const [rows] = await pool.query('SELECT * FROM `UsuarioAPP` WHERE idusp = ?', [req.body.userName]);
    if (!rows) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${userName}`
        })

    }

    try {
        const [rows] = await pool.query('INSERT INTO `UsuarioAPP` (`userName`, `email`, `password`) VALUES (?,?,?) ', ([userName, email, password]))
        return res.json({
            msg: `Usuario ${userName} creado exitosamente`
        })

    } catch (error) {
        res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${userName}`
        })
    }


}