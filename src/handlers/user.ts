import express, {Request,Response} from 'express'
import {User,UserHub} from '../models/user'

const user_data = new UserHub()

const index = async(req:Request,res:Response)=>{
    const users = await user_data.index()
    res.json(users)
}

const show = async(req:Request,res:Response)=>{
    const user = await user_data.show(req.params.id)
    res.json(user)
}

const create = async(req:Request,res:Response)=>{
    const user = {
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        password:req.body.password
    }
    const new_user = await user_data.create(user);
    res.json(new_user)
}

const user_routes = (app:express.Application) =>{
    app.get('/users',index)
    app.get('/users/:id',show)
    app.post('/users',create)
}

export default user_routes