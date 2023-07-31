"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUnauthenticatedError = exports.sendBadRequestError = exports.sendServerError = exports.sendResponse = void 0;
function createSuccessResponse(result) {
    return {
        success: true,
        errorMessage: null,
        result,
    };
}
function createErrorResponse(message) {
    return {
        success: false,
        errorMessage: message,
        result: null,
    };
}
function sendResponse(res, result) {
    res.json(createSuccessResponse(result));
}
exports.sendResponse = sendResponse;
function sendServerError(res) {
    res.status(500).send(createErrorResponse('Internal server error'));
}
exports.sendServerError = sendServerError;
function sendBadRequestError(res, message) {
    res.status(400).send(createErrorResponse(message !== null && message !== void 0 ? message : 'Bad request'));
}
exports.sendBadRequestError = sendBadRequestError;
function sendUnauthenticatedError(res, message) {
    res.status(401).send(createErrorResponse(message !== null && message !== void 0 ? message : 'Unauthenticated'));
}
exports.sendUnauthenticatedError = sendUnauthenticatedError;
//# sourceMappingURL=response.js.map