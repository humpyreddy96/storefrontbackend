"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductsStore {
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Unable to fetch all the products list. ${err}`);
        }
    }
    async show(id) {
        try {
            //@ts-ignore
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find the book with ${id}. Error: ${err}`);
        }
    }
    async create(p) {
        try {
            //@ts-ignore
            const sql = 'INSERT INTO products (name,price,category) VALUES($1,$2,$3) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [p.name, p.price, p.category]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not add new product ${p.name}. Error:${err}`);
        }
    }
}
exports.ProductsStore = ProductsStore;
