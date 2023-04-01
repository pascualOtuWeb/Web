import { Router } from "express";
import { crearCogo, eliminarCogo, getCogo } from "../controllers/cogo.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/cogo', validaToken, getCogo)
router.post('/cogo', validaToken, crearCogo)
router.delete('/cogo/:idCogo', validaToken, eliminarCogo)

export default router