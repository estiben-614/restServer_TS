import express, { Application } from "express"
import dotenv from "dotenv"
import { userRouter } from "../routes/usuario";
import cors from "cors"
import { db } from "../db/connection";
dotenv.config()

export class Server{

    private app:Application;
    private port;
    private apiPaths={
        usuarios:'/api/usuarios'
    }
    constructor(){

        this.app=express()
        this.port=process.env.PORT || '8080';
        this.dbConecction()
        this.middlewares()
        this.routes()
        
    }
    async dbConecction(){
        try{
            await db.authenticate()
            console.log('Database online')
        }
        catch(err){
            console.log(err)
        }
    }
    middlewares(){

        //CORS
        this.app.use(cors())

        //Lectura del body
        this.app.use(express.json()) //Gracias a esto se parsea la información del body en las peticiones POST 
        
        //Carpeta publica
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.apiPaths.usuarios,userRouter)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}