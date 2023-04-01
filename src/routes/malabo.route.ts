import { Router } from "express";
import { crearMalabo, eliminarMalabo, getMalabo } from "../controllers/malabo.controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/malabo', validaToken, getMalabo)
router.post('/malabo', validaToken, crearMalabo)
router.delete('/malabo/:idMalabo', validaToken, eliminarMalabo)

export default router