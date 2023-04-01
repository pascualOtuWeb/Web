import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { pool } from "../db/conDb";
import jwt from 'jsonwebtoken'



export const loginUser = async (req: Request, res: Response) => {

    const { userName, password } = req.body
    //validamos si el usuario exsite en la base de datos
    try {
        const [user] = await pool.query('SELECT * FROM UsuarioAPP WHERE userName = ? AND password=?', [userName, password]);

        //convertimos el resltado de la consulta para poder
        const data = JSON.parse(JSON.stringify(user))
        const dataPas = JSON.parse(JSON.stringify(user))
        // console.log(data)

        //validamos el password
        /*
                const passValida = await bcrypt.compare(password, user.constructor.name)
                console.log(passValida)
        */

        //const dataPas = JSON.parse(JSON.stringify(user))

        if ((data.length === 0) && (dataPas.length === 0)) {

            return res.status(400).json({
                msg: `Nombre de usuario  ${userName} o contrasena son incorrectas`
            })

        } else {

            console.log('Usuario verificado')
        }


    } catch (error) {
        return res.status(400).json({
            msg: `Upp eror contacte con el Admin de servicio`
        })
    }

    // generamos un token que seria designado por cada usuario
    const token = jwt.sign({
        userName: userName
    }, process.env.KEYSECRET || '1254@pascu', { expiresIn: '1h' })
    res.json(token)


    //console.log('sigue la ejecusion del programa')
    //generamos el token
    /*
        const token3 = jwt.sign({ userName }, process.env.KEYSECRET || '1254@pascu', { expiresIn: '1h' })
        //enviar cookies

        // res.cookie('token3', token3, { httpOnly: true, sameSite: 'strict' })
        res.status(200).json({ msg: 'bien cookie', token3 })
    
        //res.json({ token3 })
        /*
        const token3 = jwt.sign({ userName }, process.env.KEYSECRET || '1254@pascu', { expiresIn: '1h' })
        res.cookie('token3', token3, { httpOnly: true, sameSite: 'strict' })
        res.status(200).json({ msg: 'bien cookie', token3 })
    
        // return res.json({ token2 })*/



    /*
    /*  
          //v2
          const keyA = '12354pasq'
          const generarToken = (userName: any) => {
              const token = jwt.sign({ userName }, keyA, { expiresIn: '1h' })
              return token;
          }
      
//v3 
const token3 = jwt.sign({ userName }, process.env.KEYSECRET || '1254@pascu', { expiresIn: '1h' })
//enviar cookies

res.cookie('token3', token3, { httpOnly: true, sameSite: 'strict' })
 res.status(200).json({ msg: 'bien cookie', token3 })
 res.json({ token3 })
*/

}
