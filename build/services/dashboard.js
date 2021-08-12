"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardQueries = void 0;
const database_1 = __importDefault(require("../database"));
class DashboardQueries {
    async productByCategory(category) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products WHERE category = ($1)';
            const result = await conn.query(sql, [category]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable to get products by category ${category}. Error ${err}`);
        }
    }
    async orderByUserId(userId) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders WHERE user_id = ($1)';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable to get orders by user id ${userId}`);
        }
    }
    async completedOrderByUserId(userId) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders where user_id = ($1) AND status = \'active\'';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get completed orders by userID ${userId}: ${err}`);
        }
    }
    async fiveMostPopularProduct() {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT name, price, category, SUM(quantity) FROM products INNER JOIN orders ON products.id = orders.product_id GROUP BY products.id ORDER BY SUM(quantity) DESC LIMIT 5';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get five most popular products: ${err}`);
        }
    }
}
exports.DashboardQueries = DashboardQueries;
