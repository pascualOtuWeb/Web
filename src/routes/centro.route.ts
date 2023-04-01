import express from "express";
import { Router } from "express";
import { getCentro,/* getCentro, */crearCentro, eliminarCentro } from "../controllers/centroP.controllers"
import validaToken from "./valida.route.token";

//declaramos un contante para las rutas
const router = Router();
//route.use(express.json())

//creamos rutas para la tabla de los profesores
router.get('/centrop', validaToken, getCentro);


router.post('/centrop', validaToken, crearCentro);


router.delete('/centrop/:idCentro', validaToken, eliminarCentro);


export default router