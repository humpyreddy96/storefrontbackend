"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../../models/order");
const user_1 = require("../../models/user");
const product_1 = require("../../models/product");
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
                expect(result).toEqual(jasmine.objectContaining({
                    user_id: '1'
                }));
            });
        });
    });
});
