import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"


const validaToken = (req: Request, res: Response, next: NextFunction) => {
    // console.log('verificacion de  token')
    //este encabeza nos permite atrapar el token que ha siso enviado por el usuario
    const hearToken = req.headers['authorization']

    if (hearToken != undefined && hearToken.startsWith('Bearer')) {
        //tiene token
        try {
            //extraemos el toke para poder verificarlo 
            const bearToken = hearToken.slice(7)
            jwt.verify(bearToken, process.env.KEYSECRET || '1254@pascu')
            // console.log(bearToken)
            next()
            console.log('Token verificado con exito')
        } catch (error) {
            res.status(401).json({
                msg: 'Su tiempo de conexion se ha expirado'
            })
        }
    } else {
        res.status(401).json({
            msg: 'Acceso denegado '
        })
    }

}

export default validaToken