import { Request,Response } from "express"
import { Usuario } from "../models/usuario"
export const getUsuarios=async(req:Request,res:Response)=>{
    
    //Importamos el modelo
    const usuarios=await Usuario.findAll()

    res.json({
        usuarios
    })
}
export const getUsuario=async(req:Request,res:Response)=>{
    const {id}=req.params

    const usuario=await Usuario.findByPk(id)

    if(!usuario){
        res.status(404).json({
            msg:`No existe un usuario con ID : ${id}`
        })
    }
    else{
        res.json({
            msg:'getUsuario',
            usuario
        })
    }
    
}
export const postUsuario=async(req:Request,res:Response)=>{
    //Recuperamos toda la info del body en POSTMAN
    const {body}=req
    try {
        //Revisemos si ya existe un usuario con el email
        const email=body.email
        const existeUsuario=await Usuario.findOne({
            where:{email:email}
        })

        if(!existeUsuario){
            const usuario=await Usuario.create(body)
            await usuario.save()

            res.json({
                msg:'Usuario Creado',
                body
            })
        }
        else{
            return res.status(400).json({
                msg:`Ya existe un usuario con el email: ${email}`
            
            })
        }

        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg:'Hable con el administrador'
        })
    }
   
}
export const putUsuario=async(req:Request,res:Response)=>{
    const {id}=req.params
    const {body}=req


    try {
        //Para modificar un usuario, primero veamos que si exista
        const usuario=await Usuario.findByPk(id)

        //Si no existe
        if(!usuario){
            return res.status(400).json({
                mag:`No existe un usuario con ese ID : ${id}`
            })
        }

        else{
            await usuario.update(body)

            return res.json({
                msg:'Usuario actualizado',
                usuario
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:"Hable con el administrador"
        })
    }
   
}
export const deleteUsuario=async(req:Request,res:Response)=>{
    const {id}=req.params
   
    const {body}=req


    try {
        //Para eliminar un usuario, primero veamos que si exista
        const usuario=await Usuario.findByPk(id)

        //Si no existe
        if(!usuario){
            return res.status(400).json({
                mag:`No existe un usuario con ese ID : ${id}`
            })
        }

        else{
            await usuario.update({
                estado:"false"
            })

            return res.json({
                msg:'Usuario eliminado',
                usuario
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:"Hable con el administrador"
        })
    }
}