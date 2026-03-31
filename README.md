Product Management REST API
A RESTful API for managing products, built with Node.js and Express.js. Supports full CRUD operations and create, read, update, and delete products  with data persisted in a MongoDB database.

Tech Stack

Runtime: Node.js
Framework: Express.js
Database: MongoDB
ODM: Mongoose
Dev Tool: Nodemon


Project Structure
├── controllers/
│   └── product.controller.js
├── models/
│   └── products.model.js
├── routes/
│   └── product.routes.js
├── index.js
└── package.json

API Endpoints
MethodEndpointDescriptionGET/api/productsRetrieve all productsGET/api/products/:idRetrieve a single productPOST/api/productsCreate a new productPUT/api/products/:idUpdate an existing productDELETE/api/products/:idDelete a product

Getting Started
Prerequisites

Node.js installed
MongoDB connection string (local or Atlas)

Installation
bash# Clone the repository
git clone https://github.com/Essang547/Simple-Crude-App--Backend.git

# Navigate into the project
cd Simple-Crude-App--Backend

# Install dependencies
npm install

# Start the development server
npm run dev

Environment Variables
Create a .env file in the root directory and add:
MONGO_URI=your_mongodb_connection_string
PORT=3000
