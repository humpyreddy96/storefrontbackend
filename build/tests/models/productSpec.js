"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../../models/product");
const store = new product_1.ProductsStore();
describe('Product Model', () => {
    beforeAll(async () => {
        await store.create({
            name: 'spoon',
            price: 10,
            category: 'utensil'
        });
    });
    it('should have index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have create method', () => {
        expect(store.create).toBeDefined();
    });
    it('create method should add one product', async () => {
        const result = await store.create({
            name: 'spoon',
            price: 10,
            category: 'utensil'
        });
        expect(result).toEqual({
            id: 1,
            name: 'spoon',
            price: 10,
            category: 'utensil'
        });
    });
    it('index method should return list', async () => {
        const result = await store.index();
        expect(result).toEqual([{
                id: 1,
                name: 'spoon',
                price: 10,
                category: 'utensil'
            }]);
    });
    it('show method should return single product', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            id: 1,
            name: 'spoon',
            price: 10,
            category: 'utensil'
        });
    });
});
