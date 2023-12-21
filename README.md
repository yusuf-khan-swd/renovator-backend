## `Useful Links`

**1. [Github Client Side Repository](https://github.com/yusuf-khan-swd/renovator-frontend)** \
**2. [Github Server Side Repository](https://github.com/yusuf-khan-swd/renovator-backend)** \
**3. [Live Website](https://renovator-frontend.vercel.app)**

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

### Services

- api/v1/services/create-book (POST)
- api/v1/services (GET)
- api/v1/services/bc4beb7e-8756-41d8-92ae-9c36d13b5540/category (GET)
- api/v1/services/45e5d21d-e115-4a55-a3ac-a4da01e2b25c (GET)
- api/v1/services/45e5d21d-e115-4a55-a3ac-a4da01e2b25c (PATCH)
- api/v1/services/1be009bb-911e-4763-805b-84f6788ade4f (DELETE)

### Bookings

- api/v1/bookings/create-order (POST)
- api/v1/bookings (GET)
- api/v1/bookings/eef038f2-3011-45ba-b9d8-188753f3465d (GET)

### Reviews

- api/v1/reviews/create-category (POST)
- api/v1/reviews (GET)
- api/v1/reviews/:id (Single GET) Include an id that is saved in your database
- api/v1/reviews/:id (PATCH)
- api/v1/reviews/:id (DELETE) Include an id that is saved in your database

### Cart

- api/v1/carts/create-category (POST)
- api/v1/carts (GET)
- api/v1/carts/:id (Single GET) Include an id that is saved in your database
- api/v1/carts/:id (PATCH)
- api/v1/carts/:id (DELETE) Include an id that is saved in your database

### Feedbacks

- api/v1/feedbacks/create-category (POST)
- api/v1/feedbacks (GET)
- api/v1/feedbacks/:id (Single GET) Include an id that is saved in your database
- api/v1/feedbacks/:id (PATCH)
- api/v1/feedbacks/:id (DELETE) Include an id that is saved in your database

### FAQ

- api/v1/faqs/create-category (POST)
- api/v1/faqs (GET)
- api/v1/faqs/:id (Single GET) Include an id that is saved in your database
- api/v1/faqs/:id (PATCH)
- api/v1/faqs/:id (DELETE) Include an id that is saved in your database

### Blog

- api/v1/blogs/create-category (POST)
- api/v1/blogs (GET)
- api/v1/blogs/:id (Single GET) Include an id that is saved in your database
- api/v1/blogs/:id (PATCH)
- api/v1/blogs/:id (DELETE) Include an id that is saved in your database
