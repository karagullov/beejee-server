"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utils_1 = require("../utils");
const prisma = new client_1.PrismaClient();
async function login(username, password) {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user)
        return null;
    const isCorrectPassword = await bcryptjs_1.default.compare(password, user.password);
    if (!isCorrectPassword)
        return null;
    const token = (0, utils_1.generateToken)(user.id, user.username);
    return { token, user: { id: user.id, username: user.username } };
}
exports.login = login;
//# sourceMappingURL=service.js.map