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
exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const utils_1 = require("../utils");
const service = __importStar(require("./service"));
async function getTodos(req, res) {
    const { take, skip, sortOrder, sortBy } = req.query;
    try {
        const todos = await service.getTodos({
            skip: +skip,
            take: +take,
            sortBy: sortBy,
            sortOrder: sortOrder,
        });
        (0, utils_1.sendResponse)(res, todos);
    }
    catch (err) {
        console.error(err);
        (0, utils_1.sendServerError)(res);
    }
}
exports.getTodos = getTodos;
async function createTodo(req, res) {
    const { username, email, task } = req.body;
    const todo = await service.createTodo({ username, email, task });
    (0, utils_1.sendResponse)(res, todo);
}
exports.createTodo = createTodo;
async function updateTodo(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;
    const todo = await service.updateTodo({ id: +id, task, completed });
    if (!todo)
        return (0, utils_1.sendBadRequestError)(res, 'Todo not found');
    (0, utils_1.sendResponse)(res, todo);
}
exports.updateTodo = updateTodo;
//# sourceMappingURL=controller.js.map