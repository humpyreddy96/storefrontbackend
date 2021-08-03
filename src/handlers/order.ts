import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'
import verifyToken from './verifyAuthToken'

const store = new OrderStore();

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            product_id:req.body.product_id,
            quantity:req.body.quantity,
            user_id:req.body.user_id,
            status:req.body.status
        }
        const newOrder = await store.create(order)

        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}
const index = async (_req: Request, res: Response) => {
    const orders = await store.index()
    res.json(orders)
  }
  
  const show = async (req: Request, res: Response) => {
     const order = await store.show(req.params.id)
     res.json(order)
  }

const order_routes = (app: express.Application) => {
    app.post('/orders',verifyToken, create)
    app.get('/orders', index)
    app.get('/orders/:id',verifyToken, show)
  }

export default order_routes