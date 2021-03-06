"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = require("../services/dashboard");
const verifyAuthToken_1 = __importDefault(require("./verifyAuthToken"));
const dashboard_routes = (app) => {
    app.get('/products-by-category', productByCategory);
    app.get('/order-by-userid', verifyAuthToken_1.default, orderByUserId);
    app.get('/complete-order-by-userid', verifyAuthToken_1.default, completedOrderByUserId);
    app.get('/five-most-popular-product', fiveMostPopularProduct);
};
const dashboard = new dashboard_1.DashboardQueries();
const productByCategory = async (_req, res) => {
    const products = await dashboard.productByCategory(_req.body.category);
    res.json(products);
};
const orderByUserId = async (_req, res) => {
    const orders = await dashboard.orderByUserId(_req.body.user_id);
    res.json(orders);
};
const completedOrderByUserId = async (_req, res) => {
    const orders = await dashboard.completedOrderByUserId(_req.body.user_id);
    res.json(orders);
};
const fiveMostPopularProduct = async (_req, res) => {
    const products = await dashboard.fiveMostPopularProduct();
    res.json(products);
};
exports.default = dashboard_routes;
