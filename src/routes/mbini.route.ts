import { Router } from "express";
import { crearMbini, eliminarMbini, getMbini } from "../controllers/mbini.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/mbini', validaToken, getMbini)
router.post('/mbini', validaToken, crearMbini)
router.delete('/mbini/:idMbini', validaToken, eliminarMbini)

export default router