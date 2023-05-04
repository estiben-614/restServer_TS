import express from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";
export const userRouter=express.Router()

userRouter.get('/',getUsuarios)
userRouter.get('/:id',getUsuario)
userRouter.post('/',postUsuario)
userRouter.put('/:id',putUsuario)
userRouter.delete('/:id',deleteUsuario)
