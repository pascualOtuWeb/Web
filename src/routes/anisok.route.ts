import { Router } from "express";
import { getAnisok, crearAnisok, eliminarAnisok } from "../controllers/anisok.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/anisok', validaToken, getAnisok)
router.post('/anisok', validaToken, crearAnisok)
router.delete('/anisok/:idAnisok', validaToken, eliminarAnisok)
export default router
