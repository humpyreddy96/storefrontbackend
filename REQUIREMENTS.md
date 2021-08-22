# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints


## API List
#### __Users__
 1. Create a new user (POST)

    ```
     http://localhost:3000/users/
    ```
        Request Body
    ```
    {
        "firstname": <firstname (string)>,
        "lastname" : <lastname  (string)>,
        "password" : <password  (string)>
    }
    ```
    Response Body
    ```
    {
        "firstname": <firstname (string)>,
        "lastname" : <lastname  (string)>,
    }
    ```
 2. Get all users (Method:GET)

     ``` 
     http://localhost:3000/users/all
    ```

    Response Body
    ```
    {
        "firstname": <firstname (string)>,
        "lastname" : <lastname  (string)>,
    }
    ```

 3. Get a specific user (GET)

     ``` 
     http://localhost:3000/users/all
    ```

    Response Body
    ```
    {
        "firstname": <firstname (string)>,
        "lastname" : <lastname  (string)>,
    }
    ```

 4. Authenticate User (POST)

    ```
    http://localhost:3000/users/auth
    ```
    
    Request Body
    ```
    {
        "firstname": <firstname (string)>,
        "password" : <password  (string)>
    }
    ```
    Response Body
    ```
    {
        "token": <token (string)>,
    }
    ```

Note: This token is to be put in the bearer token in the header in the below endpoints mentioned

#### __Products__

1. Create Product (POST)

    ```
    http://localhost:3000/products/
    ```
    Request Body

    ```
    {
        "name": <name (string)>,
        "price" : <price  (number)>,
        "category": <category (string)>
    }
    ```
    Response Body

    ```
    {
        "id":1,
        "name": <name (string)>,
        "price" : <price  (number)>,
        "category": <category (string)>
    }
    ```

2. Get Product (GET)

    ```
    http://localhost:3000/products/:id
    ```

    Response Body

    ```
    {
        "id":1,
        "name": <name (string)>,
        "price" : <price  (number)>,
        "category": <category (string)>
    }
    ```
    

3. Get all Products (GET)

    ```
    http://localhost:3000/products/all
    ```

    Response Body

    ```
    {
        "id":1,
        "name": <name (string)>,
        "price" : <price  (number)>,
        "category": <category (string)>
    }
    ```
    
### __Orders__

1. Create Order (POST)

 - Token to be used here

      ```
    http://localhost:3000/orders
    ```
        Request Body
    ```
    {
        "user_id": <user_id (number)>,
        "status" : <status  (string)>
    }
    ```
    Response Body
    ```
    {
        "id" : <id (number)>
        "user_id": <user_id (number)>,
        "status" : <status  (string)>,
    }
    ```

2. Adding Product to Order (POST)

 - Token to be used here

     ```
    http://localhost:3000/orders/:id/products
    ```
        Request Body
    ```
    {
        "product_id": <product_id (number)>,
        "quantity" : <quantity  (number)>
    }
    ```
    Response Body
    ```
    {
        "id":<id (number)>
        "product_id": <product_id (number)>,
        "order_id": <order_id (number)>
        "quantity" : <quantity  (string)>,
    }
    ```

3. Get Order (GET)


    ```
    http://localhost:3000/orders/:id
    ```

    Response Body
    ```
    {
        "id" : <id (number)>
        "user_id": <user_id (number)>,
        "status" : <status  (string)>,
    }
    ```

4. Getting all Orders(GET)

 - Token to be used here

    ```
    http://localhost:3000/orders/
    ```

    Response Body
    ```
    {
        "id" : <id (number)>
        "user_id": <user_id (number)>,
        "status" : <status  (string)>,
    }
    ```