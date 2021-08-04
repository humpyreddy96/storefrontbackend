"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const verifyAuthToken_1 = __importDefault(require("./verifyAuthToken"));
const store = new order_1.OrderStore();
const create = async (req, res) => {
    try {
        const order = {
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            user_id: req.body.user_id,
            status: req.body.status
        };
        const newOrder = await store.create(order);
        res.json(newOrder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const index = async (_req, res) => {
    const orders = await store.index();
    res.json(orders);
};
const show = async (req, res) => {
    const order = await store.show(req.params.id);
    res.json(order);
};
const order_routes = (app) => {
    app.post('/orders', verifyAuthToken_1.default, create);
    app.get('/orders', index);
    app.get('/orders/:id', verifyAuthToken_1.default, show);
};
exports.default = order_routes;
