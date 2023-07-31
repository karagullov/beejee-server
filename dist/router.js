"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
const todo_1 = require("./todo");
const user_1 = require("./user");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', auth_1.authRouter);
exports.router.use('/user', user_1.userRouter);
exports.router.use('/todo', todo_1.todoRouter);
//# sourceMappingURL=router.js.map