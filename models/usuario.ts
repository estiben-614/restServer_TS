import { DataType, DataTypes } from "sequelize";
import { db } from "../db/connection";

//Creamos el Modelo en la DB que ya creamos
export const Usuario=db.define('Usuario',{
    nombre:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    estado:{
        type:DataTypes.BOOLEAN,
    },
})