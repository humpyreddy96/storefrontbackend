import client from '../database'

export type Order = {
    id?:string;
    product_id:number;
    quantity:number;
    user_id:number;
    status:string;
}

export class OrderStore{
    async index():Promise<Order[]>{
        try{
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        }
        catch(err){
            throw new Error(`Not able to get orders ${err}`)
        }
    }

    async show(id:string):Promise<Order>{
        try{
            const conn = await client.connect()
            const sql = 'SELECT * FROM orders where id=($1)'
            const result = await conn.query(sql,[id])
            conn.release()
            console.log(result.rows[0])
            return result.rows[0]
        }
        catch(err){
            throw new Error(`Could not find order ${id}. Error ${err}`)
        }
    }

    async create(o:Order):Promise<Order>{

        try{
            const conn = await client.connect()
            const sql = 'INSERT INTO orders (product_id,quantity,user_id,status) VALUES($1,$2,$3,$4) RETURNING *'
            const result = await conn.query(sql,[o.product_id,o.quantity,o.user_id,o.status])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not create new order ${o.id}. Error: ${err}`)
        }
         
    }
}