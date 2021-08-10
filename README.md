# StoreFrontBackend
---
This application is the backend support with functionalities such as the following
- creating an user
- authenticating an user
- adding products and orders
- showing products and orders
- misc dashboard features

---

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
---
## Installations
Install Dependencies
- `yarn install`
- `db-migrate up`
---
## Testing
- `yarn run test`

## Run Server
- `yarn run start`

## API List

 1. Create a new user (Method: POST)