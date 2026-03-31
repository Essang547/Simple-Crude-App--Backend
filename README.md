# Product Management REST API

A RESTful API for managing products, built with Node.js and Express.js. Supports full CRUD operations — create, read, update, and delete products with data persisted in a MongoDB database.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Dev Tool:** Nodemon

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Retrieve all products |
| GET | /api/products/:id | Retrieve a single product |
| POST | /api/products | Create a new product |
| PUT | /api/products/:id | Update an existing product |
| DELETE | /api/products/:id | Delete a product |

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection string (local or Atlas)

### Installation
```bash
git clone https://github.com/Essang547/Simple-Crude-App--Backend.git
cd Simple-Crude-App--Backend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file and add:
