"use strict";
// import {Order, OrderStore} from '../../models/order';
// import {User, UserHub} from '../../models/user';
// import {Product, ProductsStore} from '../../models/product';
// const store = new OrderStore();
// const userStore = new UserHub();
// const productStore = new ProductsStore();
// describe('Order model - ', () => {
//     beforeAll(async()=>{
//         await productStore.create({
//             name: 'spoon',
//             price: 10,
//             category: 'kitchen'
//         })
//         await userStore.create({
//             first_name: 'John',
//             last_name: 'Smith',
//             password: 'password123'
//         });
//     })
//     it('should have index method', () => {
//         expect(store.index).toBeDefined();
//     })
//     it('should have show method', () => {
//         expect(store.show).toBeDefined();
//     })
//     it('should have create method', () => {
//         expect(store.create).toBeDefined();
//     })
//     it('create method should add 1 order', async() =>{
//         const result = await store.create({
//             status: 'active',
//             user_id: 1,
//             product_id:1,
//             quantity:1
//         })
//         expect(result).toEqual({
//             id:1,
//             user_id: 1,
//             product_id:1,
//             quantity:1,
//             status: 'active'
//         });
//     })
//     // it('index method should return list', async() => {
//     //     const result = await store.index();
//     //     expect(result).toEqual([{
//     //         id:1,
//     //         status: 'active',
//     //         user_id: 1,
//     //         product_id:1,
//     //         quantity:1
//     //     }])
//     // })
//     // it('show method should return single order', async () => {
//     //     const result = await store.show('1');
//     //     expect(result).toEqual({
//     //         id:1,
//     //         status: 'active',
//     //         user_id: 1,
//     //         product_id:1,
//     //         quantity:1
//     //     })
//     // })
// })
