import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import user_routes from './handlers/user'
import product_routes from './handlers/product'
import order_routes from './handlers/order'
import dashboard_routes from './handlers/dashboard'
const app: express.Application = express()
const address: string = "0.0.0.0:3001"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

user_routes(app)
product_routes(app)
order_routes(app)
dashboard_routes(app)
app.listen(3001, function () {
    console.log(`starting app on: ${address}`)
})
