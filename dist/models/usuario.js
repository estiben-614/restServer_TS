"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
//Creamos el Modelo en la DB que ya creamos
exports.Usuario = connection_1.db.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
//# sourceMappingURL=usuario.js.map