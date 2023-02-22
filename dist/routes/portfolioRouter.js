"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRouter = void 0;
const express_1 = require("express");
exports.portfolioRouter = (0, express_1.Router)();
exports.portfolioRouter.get('/', (req, res) => {
    console.log(req);
    res.send({
        message: 'Hello World'
    });
});
exports.portfolioRouter.post('/', (req, res) => {
    console.log(req);
    res.send(200);
});
//# sourceMappingURL=portfolioRouter.js.map