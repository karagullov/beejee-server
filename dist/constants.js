"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieDomain = exports.PORT = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === "production";
exports.PORT = process.env.PORT || 5000;
exports.cookieDomain = exports.__prod__ ? ".onrender.com" : undefined;
//# sourceMappingURL=constants.js.map