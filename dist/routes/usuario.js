"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const usuarios_1 = require("../controllers/usuarios");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/', usuarios_1.getUsuarios);
exports.userRouter.get('/:id', usuarios_1.getUsuario);
exports.userRouter.post('/', usuarios_1.postUsuario);
exports.userRouter.put('/:id', usuarios_1.putUsuario);
exports.userRouter.delete('/:id', usuarios_1.deleteUsuario);
//# sourceMappingURL=usuario.js.map