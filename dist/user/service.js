"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getUser(id) {
    return prisma.user.findUnique({
        where: { id },
        select: { id: true, username: true },
    });
}
exports.getUser = getUser;
//# sourceMappingURL=service.js.map