"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_data = new user_1.UserHub();
const index = async (req, res) => {
    const users = await user_data.index();
    res.json(users);
};
const show = async (req, res) => {
    const user = await user_data.show(req.params.id);
    res.json(user);
};
const create = async (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    };
    const new_user = await user_data.create(user);
    res.json(new_user);
};
const auth = async (req, res) => {
    const user = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        password: req.body.password
    };
    const authUser = await user_data.authenticate(user.firstName, user.password);
    var token = jsonwebtoken_1.default.sign({ user: authUser }, process.env.TOKEN_SECRET);
    res.json({ 'token': token });
};
const user_routes = (app) => {
    app.post('/users', create);
    app.get('/users/all', index);
    app.get('/users/:id', show);
    app.post('/users/auth', auth);
};
exports.default = user_routes;
