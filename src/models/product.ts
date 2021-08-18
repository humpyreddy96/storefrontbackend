import client from '../database'

export type Product = {
    id?:number;
    name:string;
    price:number;
    category?:string
}

export class ProductsStore{
    async index():Promise<Product[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT category FROM products'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }catch(err){
            throw new Error(`Unable to fetch all the products list. ${err}`)
        }
    }

    async show(id:string):Promise<Product>{
        try{
            //@ts-ignore
            const sql = 'SELECT * FROM products WHERE id=($1)'
            const conn = await client.connect()
            const result =  await conn.query(sql,[id])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not find the book with ${id}. Error: ${err}`)
        }
    }

    async create(p:Product):Promise<Product>{
        try{
            //@ts-ignore
            const sql = 'INSERT INTO products (name,price,category) VALUES($1,$2,$3) RETURNING id,name,price,category'
            const conn = await client.connect()
            const result = await conn.query(sql,[p.name,p.price,p.category])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not add new product ${p.name}. Error:${err}`)
        }
    }
}