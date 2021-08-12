import client from '../database'
import bcrypt, { compareSync } from 'bcrypt'

const saltRounds = process.env.SALT_ROUNDS!
const pepper = process.env.BCRYPT_PASSWORD
export type User = {
    id?:string;
    first_name:string;
    last_name:string;
    password?:string;
}

export class UserHub{

    //returns all the users list
    async index():Promise<User[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT first_name,last_name FROM users'
            const result = await conn.query(sql)
            conn.release()

            return result.rows
        }
        catch(err){
            throw new Error(`Could not get users.Error: ${err}`)
        }
    }

    //returns a particular user of the provided id
    async show(id:string):Promise<User>{
        try{
            //@ts-ignore
            const sql = 'SELECT first_name,last_name FROM users WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql,[id])
            conn.release()

            return result.rows[0]

        }
        catch(err){
            throw new err(`Could not find user ${id}. Error: {err}`)
        }
    }

    async create(u:User):Promise<User|null>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO users(first_name,last_name,password_digest) VALUES($1,$2,$3) RETURNING first_name,last_name'
            const hash = bcrypt.hashSync(
                u.password! + pepper,
                parseInt(saltRounds)
            )
            const result = await conn.query(sql,[u.first_name,u.last_name,hash])
            conn.release()

            return result.rows[0]
        }catch(err){
            throw new Error(`Could not add user ${u.first_name}`)
        }
    }

    async authenticate(first_name:string,password:string):Promise<User | null>{

        try{
            const conn = await client.connect()
            const sql = 'SELECT first_name,password_digest FROM users WHERE first_name=($1)'
            const result = await conn.query(sql,[first_name])
            if(result.rows.length){
                const user = result.rows[0]
                if(bcrypt.compareSync(password+pepper,user.password_digest)){
                    console.log('authenticated')
                    return user
                }else{
                    console.log('incorrect password')
                }
            }
            return null
        }catch(err){
            throw new Error (`Could not authenticate the user ${first_name}`)
        }
        
    }
}