import { Router } from "express";
import { enviarMensage } from "../controllers/contacto.Controllers";


//declaracion de la variable
const router = Router()

router.post('/contacto', enviarMensage)

export default router