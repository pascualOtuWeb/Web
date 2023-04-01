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
exports.newUser = void 0;
const conDb_1 = require("../db/conDb");
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * INSERT INTO `UsuarioAPP` (`idusp`, `userName`, `email`, `password`) VALUES
     * (NULL, 'Raquel', 'raquel@gmail.com', '1234');
     */
    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    //ciframos la contrasena
    //const hashedPassword = await bcrypt.hash(password, 10)
    //console.log(hashedPassword)
    //validamos si el usuario existe en la base de datos
    //SELECT * FROM `UsuarioAPP` WHERE userName = userName
    const [rows] = yield conDb_1.pool.query('SELECT * FROM `UsuarioAPP` WHERE idusp = ?', [req.body.userName]);
    if (!rows) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${userName}`
        });
    }
    try {
        const [rows] = yield conDb_1.pool.query('INSERT INTO `UsuarioAPP` (`userName`, `email`, `password`) VALUES (?,?,?) ', ([userName, email, password]));
        return res.json({
            msg: `Usuario ${userName} creado exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${userName}`
        });
    }
});
exports.newUser = newUser;
