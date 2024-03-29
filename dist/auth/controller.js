"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const service = __importStar(require("./service"));
async function login(req, res) {
    try {
        const data = await service.login(req.body.username, req.body.password);
        if (!data) {
            return (0, utils_1.sendUnauthenticatedError)(res, "Invalid username or password");
        }
        (0, utils_1.sendResponse)(res, data);
    }
    catch (_a) {
        (0, utils_1.sendServerError)(res);
    }
}
exports.login = login;
async function logout(_, res) {
    res.clearCookie("token", { domain: constants_1.cookieDomain });
    (0, utils_1.sendResponse)(res, null);
}
exports.logout = logout;
//# sourceMappingURL=controller.js.map