import { Router } from "express";
import { getProfesores } from "../controllers/profesores.Controllers";
import validaToken from "./valida.route.token";

const router = Router();

router.get('/profesor', validaToken, getProfesores)

export default router