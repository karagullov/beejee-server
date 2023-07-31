"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const todoSelect = {
    id: true,
    completed: true,
    edited: true,
    email: true,
    task: true,
    username: true,
};
async function getTodos({ skip, take, sortBy, sortOrder, }) {
    const count = await prisma.todo.count();
    const _sortOrder = sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'desc';
    let order = [
        { [sortBy !== null && sortBy !== void 0 ? sortBy : 'createdAt']: _sortOrder },
    ];
    if (sortBy === 'completed') {
        order = [{ completed: _sortOrder }, { updatedAt: 'desc' }];
    }
    const todo = await prisma.todo.findMany({
        skip,
        take,
        orderBy: order,
        select: todoSelect,
    });
    return {
        todo,
        count,
    };
}
exports.getTodos = getTodos;
async function createTodo({ username, email, task, }) {
    return prisma.todo.create({
        data: {
            username,
            email,
            task,
        },
        select: todoSelect,
    });
}
exports.createTodo = createTodo;
async function updateTodo({ id, task, completed, }) {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo)
        return null;
    return prisma.todo.update({
        where: {
            id,
        },
        data: {
            task,
            completed,
            edited: !!task,
        },
        select: todoSelect,
    });
}
exports.updateTodo = updateTodo;
//# sourceMappingURL=service.js.map