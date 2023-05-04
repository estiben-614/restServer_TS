import { Sequelize } from "sequelize";

export const db= new Sequelize('cursonode','root','123456',{
    host:'localhost',
    dialect:'mysql'
})