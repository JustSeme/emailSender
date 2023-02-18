"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRouter = void 0;
const express_1 = require("express");
exports.portfolioRouter = (0, express_1.Router)();
exports.portfolioRouter.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    });
});
exports.portfolioRouter.post('sendEmail', () => {
});
//# sourceMappingURL=portfolioRouter.js.map