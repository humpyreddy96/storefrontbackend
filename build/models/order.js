"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Not able to get orders ${err}`);
        }
    }
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders where id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            console.log(result.rows[0]);
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find order ${id}. Error ${err}`);
        }
    }
    async create(o) {
        try {
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO orders(user_id,status) VALUES($1,$2) RETURNING *';
            const result = await conn.query(sql, [o.user_id, o.status]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create new order ${o.id}. Error: ${err}`);
        }
    }
    async addOrder(o) {
        try {
            const sql = 'INSERT INTO order_products(quantity,order_id,product_id) VALUES($1,$2,$3) RETURNING *';
            //@ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn
                .query(sql, [o.quantity, o.order_id, o.product_id]);
            const order_products = result.rows[0];
            conn.release();
            return order_products;
        }
        catch (err) {
            throw new Error(`Could not add product ${o.product_id} to order ${o.order_id}: ${err}`);
        }
    }
}
exports.OrderStore = OrderStore;
