import { Router } from "express";
import { crearLuba, eliminarLuba, getLuba } from "../controllers/luba.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/luba', validaToken, getLuba)
router.post('/luba', validaToken, crearLuba)
router.delete('/luba/:idLuba', validaToken, eliminarLuba)

export default router