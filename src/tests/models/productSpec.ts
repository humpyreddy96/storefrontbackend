import {Product, ProductsStore} from '../../models/product'
import client from '../../database'
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

const store = new ProductsStore()

describe('Product Model',()=>{

    beforeAll(async()=>{
        await store.create({
            name: 'spoon',
            price: 10,
            category: 'kitchen'
        })
    })

    afterAll(async () => {
        const conn = await client.connect();
        const sql =
            'DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\nDELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;\n';
        await conn.query(sql);
        conn.release();
    });


    it('should have index method', () => {
        expect(store.index).toBeDefined();
    })

    it('should have show method', () => {
        expect(store.show).toBeDefined();
    })

    it('should have create method', () => {
        expect(store.create).toBeDefined();
    })

    it('create method should add one product', async() =>{
        const result = await store.create({
            name: 'spoon',
            price: 10,
            category: 'kitchen'
        })
        expect(result).toEqual(jasmine.objectContaining({
            name: 'spoon',
            price: 10,
            category: 'kitchen'
        }));
    })

    it('index method should return list', async() => {
        const result = await store.index();
     expect(result).toEqual([
				jasmine.objectContaining({
					category: 'kitchen'
				}),
                jasmine.objectContaining({
					category: 'kitchen'
				})
            
			]);
    })

    it('Show method should return widget when called with ID', async () => {
        const result = await store.show('1');
        expect(result).toEqual(
            jasmine.objectContaining({
                name: 'spoon'
            })
        );
    });
    

   
})


describe('Products Test Endpoints',()=>{

    beforeAll(async () => {
        await store.create({
            name: 'apple watch',
            price: 350,
            category: 'electronics.'
        });
    });

    afterAll(async () => {
        const conn = await client.connect();
        const sql =
            'DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\nDELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;\n';
        await conn.query(sql);
        conn.release();
    });


    it('Check if server runs, should return 200 status', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('Test Index should return array of products', async () => {
        const response = await request
            .get('/products/all')
        expect(response.status).toBe(200);
      
    });

    it('Test Index should return array of products', async () => {
        const response = await request
            .get('/products/1')
        expect(response.status).toBe(200);
      
    });

    it('Test Create should return created Product', async () => {
        const response = await request
            .post('/products')
            .send({
                name: 'spoon',
                price: 1,
                category: 'kitchenware.'
            });
        expect(response.status).toBe(200);
    });
})