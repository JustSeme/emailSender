"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portfolioRouter_1 = require("./routes/portfolioRouter");
const settings_1 = require("./settings");
const PORT = process.env.PORT || settings_1.settings.PORT;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    console.log('Server listen on port', PORT);
});
app.use('/portfolio-api', portfolioRouter_1.portfolioRouter);
//# sourceMappingURL=index.js.map