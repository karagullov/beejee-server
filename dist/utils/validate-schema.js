"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const response_1 = require("./response");
async function validateSchema({ res, next, data, schema, }) {
    try {
        await schema.validate(data);
        next();
    }
    catch (error) {
        const type = error === null || error === void 0 ? void 0 : error.type;
        const path = error === null || error === void 0 ? void 0 : error.path;
        if (type === 'required') {
            (0, response_1.sendBadRequestError)(res, `${path} field is required`);
        }
        else {
            (0, response_1.sendBadRequestError)(res, `Invalid ${path} provided`);
        }
    }
}
exports.validateSchema = validateSchema;
//# sourceMappingURL=validate-schema.js.map