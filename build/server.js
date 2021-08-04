"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./handlers/user"));
const product_1 = __importDefault(require("./handlers/product"));
const order_1 = __importDefault(require("./handlers/order"));
const dashboard_1 = __importDefault(require("./handlers/dashboard"));
const app = express_1.default();
const address = "0.0.0.0:3001";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
user_1.default(app);
product_1.default(app);
order_1.default(app);
dashboard_1.default(app);
app.listen(3001, function () {
    console.log(`starting app on: ${address}`);
});
