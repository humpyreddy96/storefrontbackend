import client from '../database'

export type Order = {
	id?: number;
	user_id: number;
	status: string;
};

export type OrderProduct = {
	id?: number;
	quantity: number;
	order_id: number;
	product_id: number;
};

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
            const sql = 'INSERT INTO orders(user_id,status) VALUES($1,$2) RETURNING *'
            const result = await conn.query(sql,[o.user_id,o.status])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error(`Could not create new order ${o.id}. Error: ${err}`)
        }
         
    }

    async addOrder(o:OrderProduct):Promise<OrderProduct>{
        try {
            const sql = 'INSERT INTO order_products(quantity,order_id,product_id) VALUES($1,$2,$3) RETURNING *'
            //@ts-ignore
            const conn = await client.connect()
      
            const result = await conn
                .query(sql, [o.quantity, o.order_id, o.product_id])
      
            const order_products = result.rows[0]
      
            conn.release()
      
            return order_products
          } catch (err) {
            throw new Error(`Could not add product ${o.product_id} to order ${o.order_id}: ${err}`)
          }
    }
}