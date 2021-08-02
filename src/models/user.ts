import client from '../database'

export type User = {
    id?:string;
    firstName:string;
    lastName:string;
    password:string;
}

export class UserHub{

    //returns all the users list
    async index():Promise<User[]>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM users'
            const result = await conn.query(sql)
            conn.release()

            return result.rows
        }
        catch(err){
            throw new Error(`Could not get books.Error: ${err}`)
        }
    }

    //returns a particular user of the provided id
    async show(id:string):Promise<User>{
        try{
            //@ts-ignore
            const sql = 'SELECT * FROM users WHERE id=($1)'
            const conn = await client.connect()
            const result = await conn.query(sql,[id])
            conn.release()

            return result.rows[0]

        }
        catch(err){
            throw new err(`Could not find book ${id}. Error: {err}`)
        }
    }

    async create(u:User):Promise<User|null>{
        try{
            //@ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO users(first_name,last_name,password_digest) VALUES($1,$2,$3) RETURNING *'
            const result = await conn.query(sql,[u.firstName,u.lastName,u.password])
            conn.release()

            return result.rows[0]
        }catch(err){
            throw new Error(`Could not add user ${u.firstName}`)
        }
    }
}