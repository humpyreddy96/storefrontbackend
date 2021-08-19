import express, { Request, Response } from 'express'
import { Order, OrderProduct, OrderStore } from '../models/order'
import verifyToken from './verifyAuthToken'

const store = new OrderStore();


const index = async (_req: Request, res: Response) => {
    const orders = await store.index()
    res.json(orders)
  }
  
  const show = async (req: Request, res: Response) => {
     const order = await store.show(req.params.id)
     res.json(order)
  }

  const create = async(req:Request,res:Response)=>{

    const order = {
        user_id:req.body.user_id,
        status:req.body.status,
    }
    try{
      const new_order = await store.create(order)
      res.json(new_order)
    }catch(err){
      res.status(400)
      res.json(err)
    }
  
   
}

const addOrder = async (_req: Request, res: Response) => {

    const op:OrderProduct = {
        order_id:parseInt(_req.params.id),
        product_id:_req.body.product_id,
        quantity:_req.body.quantity
    }
  
    try {
      const addedProduct = await store.addOrder(op)
      res.json(addedProduct)
    } catch(err) {
      res.status(400)
      res.json(err)
    }
}




const order_routes = (app: express.Application) => {
    app.post('/orders',verifyToken, create)
    app.get('/orders', index)
    app.get('/orders/:id',verifyToken, show)
    app.post('/orders/:id/products',verifyToken, addOrder)
  }

export default order_routes