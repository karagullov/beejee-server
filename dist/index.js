"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = require("./router");
const constants_1 = require("./constants");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: constants_1.__prod__
        ? "https://beejee-client.vercel.app"
        : "http://localhost:3000",
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use("/", router_1.router);
app.listen(constants_1.PORT, () => console.log(`Server is running on port ${constants_1.PORT}`));
//# sourceMappingURL=index.js.map