"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validaToken = (req, res, next) => {
    // console.log('verificacion de  token')
    //este encabeza nos permite atrapar el token que ha siso enviado por el usuario
    const hearToken = req.headers['authorization'];
    if (hearToken != undefined && hearToken.startsWith('Bearer')) {
        //tiene token
        try {
            //extraemos el toke para poder verificarlo 
            const bearToken = hearToken.slice(7);
            jsonwebtoken_1.default.verify(bearToken, process.env.KEYSECRET || '1254@pascu');
            // console.log(bearToken)
            next();
            console.log('Token verificado con exito');
        }
        catch (error) {
            res.status(401).json({
                msg: 'Su tiempo de conexion se ha expirado'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso denegado '
        });
    }
};
exports.default = validaToken;
