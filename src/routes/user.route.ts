import { Router } from "express";
import { newUser } from "../controllers/user.Controllers";
import { loginUser } from "../controllers/login.Controllers";
import { getProfesores } from "../controllers/profesores.Controllers";
import validaToken from "./valida.route.token";
import { enviarMensage } from "../controllers/contacto.Controllers";

const router = Router()
//aqui estan definidas las rutas para el acceso
router.post('/', newUser)
router.post('/login', loginUser)
router.get('/profesor', validaToken, getProfesores)
router.post('/contacto', enviarMensage)


export default router