import { Router } from "express";
import { getAnnobon, crearAnnobon, eliminarAnnobon } from "../controllers/annobon.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/annobon', validaToken, getAnnobon)
router.post('/annobon', validaToken, crearAnnobon)
router.delete('/annobon/:idAnnobon', validaToken, eliminarAnnobon)
export default router