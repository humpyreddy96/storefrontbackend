"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../../models/order");
const store = new order_1.OrderStore();
describe('Order Model', () => {
    it('should have index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have create method', () => {
        expect(store.create).toBeDefined();
    });
    // it('create method should add 1 order', async() =>{
    //     const result = await store.create({
    //        product_id:1,
    //        status:'active',
    //        user_id:1,
    //        quantity:2
    //     })
    //     expect(result).toEqual({
    //         id:'1',
    //         product_id:1,
    //         status:'active',
    //         user_id:1,
    //         quantity:2
    //     });
    // })
});
