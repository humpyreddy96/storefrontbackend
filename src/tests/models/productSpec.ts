// import {Product, ProductsStore} from '../../models/product'
// import client from '../../database'
// const store = new ProductsStore()

// describe('Product Model',()=>{

//     beforeAll(async()=>{
//         await store.create({
//             name: 'spoon',
//             price: 10,
//             category: 'kitchen'
//         })
//     })

//     afterAll(async () => {
//         const conn = await client.connect();
//         const sql =
//             'DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\nDELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;\n';
//         await conn.query(sql);
//         conn.release();
//     });



//     it('should have index method', () => {
//         expect(store.index).toBeDefined();
//     })

//     it('should have show method', () => {
//         expect(store.show).toBeDefined();
//     })

//     it('should have create method', () => {
//         expect(store.create).toBeDefined();
//     })

//     it('create method should add one product', async() =>{
//         const result = await store.create({
//             name: 'spoon',
//             price: 10,
//             category: 'kitchen'
//         })
//         expect(result).toEqual({
//             id:2,
//             name: 'spoon',
//             price: 10,
//             category: 'kitchen'
//         });
//     })

//     it('index method should return list', async() => {
//         const result = await store.index();
//         console.log(result)
//      expect(result).toEqual([
// 				jasmine.objectContaining({
// 					category: 'kitchen'
// 				}),
//                 jasmine.objectContaining({
// 					category: 'kitchen'
// 				})
            
// 			]);
//     })

//     it('show method should return single product', async () => {
//         const result = await store.show('1');
//         expect(result).toEqual({
//             id:1,
//             name: 'spoon',
//             price: 10,
//             category: 'kitchen'
//         })
//     })
// })