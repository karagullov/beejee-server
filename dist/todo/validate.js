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
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
const getSchema = yup.object().shape({
    skip: yup.number().required(),
    take: yup.number().required(),
    sortBy: yup
        .string()
        .test('sort', 'invalid sort', value => {
        if (!value)
            return true;
        return (value === 'username' ||
            value === 'email' ||
            value === 'completed' ||
            value === 'createdAt');
    })
        .strict(true),
    sortOrder: yup
        .string()
        .test('sortOrder', 'invalid sort order', value => {
        if (!value)
            return true;
        return value === 'desc' || value === 'asc';
    })
        .strict(true),
});
const createSchema = yup.object().shape({
    username: yup.string().required().strict(true),
    email: yup.string().email().required().strict(true),
    task: yup.string().required().strict(),
});
const updateSchema = yup.object().shape({
    task: yup.string().strict(),
    completed: yup.boolean().strict(),
});
async function getTodos(req, res, next) {
    (0, utils_1.validateSchema)({ res, next, data: req.query, schema: getSchema });
}
exports.getTodos = getTodos;
async function createTodo(req, res, next) {
    (0, utils_1.validateSchema)({ res, next, data: req.body, schema: createSchema });
}
exports.createTodo = createTodo;
async function updateTodo(req, res, next) {
    (0, utils_1.validateSchema)({ res, next, data: req.body, schema: updateSchema });
}
exports.updateTodo = updateTodo;
//# sourceMappingURL=validate.js.map