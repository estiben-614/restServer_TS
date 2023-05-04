"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = require("../models/usuario");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Importamos el modelo
    const usuarios = yield usuario_1.Usuario.findAll();
    res.json({
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.Usuario.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuario con ID : ${id}`
        });
    }
    else {
        res.json({
            msg: 'getUsuario',
            usuario
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Recuperamos toda la info del body en POSTMAN
    const { body } = req;
    try {
        //Revisemos si ya existe un usuario con el email
        const email = body.email;
        const existeUsuario = yield usuario_1.Usuario.findOne({
            where: { email: email }
        });
        if (!existeUsuario) {
            const usuario = yield usuario_1.Usuario.create(body);
            yield usuario.save();
            res.json({
                msg: 'Usuario Creado',
                body
            });
        }
        else {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email: ${email}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        //Para modificar un usuario, primero veamos que si exista
        const usuario = yield usuario_1.Usuario.findByPk(id);
        //Si no existe
        if (!usuario) {
            return res.status(400).json({
                mag: `No existe un usuario con ese ID : ${id}`
            });
        }
        else {
            yield usuario.update(body);
            return res.json({
                msg: 'Usuario actualizado',
                usuario
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador"
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        //Para eliminar un usuario, primero veamos que si exista
        const usuario = yield usuario_1.Usuario.findByPk(id);
        //Si no existe
        if (!usuario) {
            return res.status(400).json({
                mag: `No existe un usuario con ese ID : ${id}`
            });
        }
        else {
            yield usuario.update({
                estado: "false"
            });
            return res.json({
                msg: 'Usuario eliminado',
                usuario
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador"
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map