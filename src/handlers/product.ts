import express, {request, Request, Response} from "express";
import {Product,ProductsStore} from '../models/product'

const store = new ProductsStore()

const index = async(_req:Request,res:Response) =>{
    const products = await store.index()
    res.json(products)
}

const show = async(req:Request,res:Response) =>{
    try{
        const getProduct = await store.show(req.params.id)
        res.json(getProduct)
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const create = async(req:Request,res:Response)=>{
    const product:Product = {
        name:req.body.name,
        price:req.body.price,
        category:req.body.category
    }
    try{
        const productCreated = await store.create(product)
        res.json(productCreated)
    }
    catch(err){
        res.status(400)
        res.json(err)
    }
   
}


const product_routes = (app:express.Application) =>{
    app.get('/products/all',index)
    app.post('/products',create)
    app.get('/products/:id',show)

}

export default product_routes