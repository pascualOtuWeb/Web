import { Router } from "express";
import { crearNiefang, eliminarNiefang, getNiefang } from "../controllers/niefang.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/niefang', validaToken, getNiefang)
router.post('/niefang', validaToken, crearNiefang)
router.delete('/niefang/:idNiefang', validaToken, eliminarNiefang)
export default router
