## Objection.js Example

#### How to run

- run `docker-compose up` to run database
- run `yarn migrate`
- run `yarn seed`
- run `yarn dev` to start offline server. (port is on 4000) This is by serverless-offline

#### endpoints

- `get /customers/:id` get customer by id. If you run seed, you have customers with id 1 and 2

- `post /customers/` create customer. Payload is `Pick<Customer, 'firstName' | 'lastName' | 'address' | 'email'>` There is no input validation for this example.

- `get /orders/:id` get order by id. If you run seed, you have two orders with id 1 and 2. Both are orders of customer 1
