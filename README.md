# Miscellaneous

Everything we used/created during the NLW Return event.

## Commands

Commands used to create initiate the project, building an API, database, ...

### To initiate project

`npm init -y`
`npm i typescript @types/node ts-node-dev -D`
`npx tsc --init`
`npx tsc`

### To create API using Express

`npm i express`
`npm i -D @types/express`

### To create a database using Prisma and SQLite and show tables

`npm i prisma -D`
`npm i @prisma/client`
`npm prisma init`
`npx prisma migrate dev`
`npx prisma studio`

### Send e-mails

`npm install nodemailer`
`npm install @types/nodemailer -D`

### Unitary tests with Jest

`npm install jest -D`
`npx jest --init`
`npm install ts-node -D`
`npm i -D jest @swc/jest`
`npm i @types/jest -D`
`npm run test`

## Something

`npm i cors`
`npm i @types/cors`

## HTTP Methods

We have 5 types of HTTP methods.

* 1. GET (used to get data from an Entity)
* 2. POST (used to registrar data from an Entity)
* 3. PUT (used to update data from an Entity)
* 4. PATCH (used to update one particular information from an Entity)
* 5. DELETE (used to delete data from an Entity)

## S.O.L.I.D

SOLID is an acronymous to:

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

which are five programming principles to maintain code to be more testable, more scalable and more maintainable.

### Single Responsibility Principle

Every class have one unique responsibility.

### Open/Closed Principle

Classes must be open to extension but closed to modification.

### Liskov Substitution Principle

We must be able to replace a class-parent with a child though heritage and everything must be working.

### Interface Segregation Principle

An interface shouldn't force a class to implement things it doesn't use.

### Dependency Inversion Principle

Things that classes can't handle alone, shall not be within, like a side-effect (database, e-mail service). To that, you should use interfaces.
