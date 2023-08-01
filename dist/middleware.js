"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const utils_1 = require("./utils");
async function authMiddleware(req, res, next) {
    const token = req.query.token;
    if (!token)
        return (0, utils_1.sendUnauthenticatedError)(res);
    try {
        const decoded = (0, utils_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (err) {
        (0, utils_1.sendUnauthenticatedError)(res);
    }
}
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=middleware.js.map