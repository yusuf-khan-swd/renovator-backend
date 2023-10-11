### Live Link: [Book Catalog Prisma](https://book-catalog-prisma.vercel.app)

```
customer_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOiJiODAyMTUwNi00YTY2LTRjYjItYTU3MS1kYTkxMDAxMjA3ZjkifQ.HijylmDoZzu54WTTwzcMIj7YJ6qkDxEy4tSHrjAIBus
```

```
admin_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJBLTAwMDAxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkzMTUzNjYyLCJleHAiOjE3MjQ2ODk2NjJ9.Kd9o3kPE7ccppjfj9T5pxJzb7cTBtCnkEZiwEXEnVZs
```

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/b8021506-4a66-4cb2-a571-da91001207f9 (Single GET) Include an id that is saved in your database
- api/v1/users/b8021506-4a66-4cb2-a571-da91001207f9 (PATCH)
- api/v1/users/34f5eb28-cd83-48c8-a490-b2b22271210f (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/bc4beb7e-8756-41d8-92ae-9c36d13b5540 (Single GET) Include an id that is saved in your database
- api/v1/categories/bc4beb7e-8756-41d8-92ae-9c36d13b5540 (PATCH)
- api/v1/categories/7dd3b045-8fc4-43ee-8dbf-b315de27ba92 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/bc4beb7e-8756-41d8-92ae-9c36d13b5540/category (GET)
- api/v1/books/45e5d21d-e115-4a55-a3ac-a4da01e2b25c (GET)
- api/v1/books/45e5d21d-e115-4a55-a3ac-a4da01e2b25c (PATCH)
- api/v1/books/1be009bb-911e-4763-805b-84f6788ade4f (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/eef038f2-3011-45ba-b9d8-188753f3465d (GET)
