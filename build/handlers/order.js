"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const verifyAuthToken_1 = __importDefault(require("./verifyAuthToken"));
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const orders = await store.index();
    res.json(orders);
};
const show = async (req, res) => {
    const order = await store.show(req.params.id);
    res.json(order);
};
const create = async (req, res) => {
    const order = {
        user_id: req.body.user_id,
        status: req.body.status,
    };
    try {
        const new_order = await store.create(order);
        res.json(new_order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const addOrder = async (_req, res) => {
    const op = {
        order_id: parseInt(_req.params.id),
        product_id: _req.body.product_id,
        quantity: _req.body.quantity
    };
    try {
        const addedProduct = await store.addOrder(op);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const order_routes = (app) => {
    app.post('/orders', verifyAuthToken_1.default, create);
    app.get('/orders', index);
    app.get('/orders/:id', verifyAuthToken_1.default, show);
    app.post('/orders/:id/products', verifyAuthToken_1.default, addOrder);
};
exports.default = order_routes;
