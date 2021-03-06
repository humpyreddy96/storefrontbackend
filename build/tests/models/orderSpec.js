"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../../models/order");
const user_1 = require("../../models/user");
const product_1 = require("../../models/product");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = supertest_1.default(server_1.default);
const orderModel = new order_1.OrderStore();
const userModel = new user_1.UserHub();
const productModel = new product_1.ProductsStore();
describe('Order Model', () => {
    describe('Test Method Exists -', () => {
        it('Index method should exist', () => {
            expect(orderModel.index).toBeDefined();
        });
        it('Show method should exist', () => {
            expect(orderModel.show).toBeDefined();
        });
        it('Create method should exist', () => {
            expect(orderModel.create).toBeDefined();
        });
        it('Create method should exist', () => {
            expect(orderModel.addOrder).toBeDefined();
        });
    });
    describe('Test Methods returning values are correct ', () => {
        beforeAll(async () => {
            await userModel.create({
                first_name: 'Test',
                last_name: 'User',
                password: 'test123'
            });
            await productModel.create({
                name: 'spoon',
                price: 19,
                category: 'kitchen'
            });
            await orderModel.create({
                id: 1,
                user_id: 1,
                status: 'active'
            });
        });
        // afterAll(async () => {
        // 	const conn = await client.connect();
        // 	const sql =
        // 		'DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\nDELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;\n';
        // 	await conn.query(sql);
        // 	conn.release();
        // });
        describe('Order Methods', () => {
            // afterAll(async () => {
            // 	const conn = await client.connect();
            // 	const sql = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1;\n';
            // 	conn.query(sql);
            // });
            it('Create method should return an order', async () => {
                const result = await orderModel.create({
                    user_id: 1,
                    status: 'active'
                });
                expect(result).toEqual(jasmine.objectContaining({
                    user_id: '1'
                }));
            });
            it('index method should return', async () => {
                const result = await orderModel.index();
                expect(result).toEqual(jasmine.objectContaining([
                    {
                        id: 1,
                        user_id: '1',
                        status: 'active'
                    }
                ]));
            });
            it('adding order', async () => {
                const result = await orderModel.addOrder({
                    product_id: 1,
                    quantity: 2,
                    order_id: 1
                });
                expect(result).toEqual(jasmine.objectContaining({
                    order_id: '1'
                }));
            });
        });
    });
    describe('Test EndPoints', () => {
        beforeAll(async () => {
            await userModel.create({
                first_name: 'Test',
                last_name: 'User',
                password: 'test123'
            });
            await productModel.create({
                name: 'spoon',
                price: 19,
                category: 'kitchen'
            });
            await orderModel.addOrder({
                product_id: 1,
                quantity: 2,
                order_id: 1
            });
        });
        it('Check if server runs, should return 200 status', async () => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
        it('Test Index should return array of products', async () => {
            const response = await request
                .get('/orders');
            expect(response.status).toBe(200);
        });
        it('Test Create should return created order', async () => {
            const response = await request
                .post('/orders')
                .send({
                "user_id": 4,
                "status": "active"
            });
            expect(response.status).toBe(401);
        });
        it('Test Create should return created order', async () => {
            const response = await request
                .post('/orders/1/products')
                .send({
                "product_id": 1,
                "quantity": 2
            });
            expect(response.status).toBe(401);
        });
    });
});
