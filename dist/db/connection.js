"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('cursonode', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
//# sourceMappingURL=connection.js.map