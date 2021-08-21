# StoreFrontBackend

This application is the backend support with functionalities such as the following
- creating an user
- authenticating an user
- adding products and orders
- showing products and orders
- misc dashboard features



## Prerequisite

PostgreSQL is required for this application. 

.env file can be added with the following data

```POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
BCRYPT_PASSWORD=secret
SALT_ROUNDS=10
TOKEN_SECRET=aloha123!
POSTGRES_DB_TEST=test_store
ENV=dev
```

## Installations
Install Dependencies
- `yarn install`
- `db-migrate up`

## Testing
- `yarn run test`

## Run Server
- `yarn run start`

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

      ```
    http://localhost:3000/users/auth
    ```

2. Adding Product to Order (POST)

     ```
    http://localhost:3000/users/auth
    ```

3. Get Order (GET)

    ```
    http://localhost:3000/users/auth
    ```

4. Getting all Orders(GET)

    ```
    http://localhost:3000/users/auth
    ```
