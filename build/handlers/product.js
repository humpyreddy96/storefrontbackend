"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const store = new product_1.ProductsStore();
const index = async (_req, res) => {
    const products = await store.index();
    res.json(products);
};
const show = async (req, res) => {
    try {
        const getProduct = await store.show(req.params.id);
        res.json(getProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const create = async (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };
    try {
        const productCreated = await store.create(product);
        res.json(productCreated);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const product_routes = (app) => {
    app.get('/products/all', index);
    app.post('/products', create);
    app.get('/products/:id', show);
};
exports.default = product_routes;
