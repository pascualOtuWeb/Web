import { Router } from "express";
import { crearMikomiseng, eliminarMikomiseng, getMikomiseng } from "../controllers/mikomiseng.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/mikomiseng', validaToken, getMikomiseng)
router.post('/mikomiseng', validaToken, crearMikomiseng)
router.delete('/mikomiseng/:idMikomiseng', validaToken, eliminarMikomiseng)
export default router
