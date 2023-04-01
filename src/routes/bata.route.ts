import { Router } from "express";
import { crearBata, eliminarBata, getBatacity } from "../controllers/bata.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/bata', validaToken, getBatacity)
router.post('/bata', validaToken, crearBata)
router.delete('/bata/:idBata', validaToken, eliminarBata)

export default router