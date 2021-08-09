import express, {Request,Response} from 'express'
import {User,UserHub} from '../models/user'
import jwt from 'jsonwebtoken'
import verifyAuthToken from './verifyAuthToken'

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
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password
    }
    const new_user = await user_data.create(user)
     res.json(new_user)
   
   
}

const auth = async(req:Request,res:Response)=>{
    const user = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password
    }
    const authUser = await user_data.authenticate(user.first_name,user.password)
    var token = jwt.sign({user:authUser},process.env.TOKEN_SECRET!)
    res.json({'token':token})
       
}
   

const user_routes = (app:express.Application) =>{

    app.post('/users',create)
    app.get('/users/all',index)
    app.get('/users/:id',show)
    app.post('/users/auth',auth)
}

export default user_routes