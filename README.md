# Product Management API

This is a Node.js and Express-based API for managing products and their reviews. 
The API supports CRUD operations for products, with MongoDB as the database.

## Features

- Register and login admin
- Create, read, update, and delete products

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
  

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have MongoDB installed and running
- You have a `.env` file with the following content:


## Installation

1. Clone the repository

git clone https://github.com/yourusername/product-management-api.git
cd product-management-api

install Dependencies
npm install
npm install jsonwebtoken
npm install mongoose
npm install mongod
2. Create a .env file in the root directory and add PORT and JWT_SECRET_KEY
3. Run the server
use npm run server or npm start

## **API ENDPOINTS**
All endpoints were tested on postman 
1. **User Endpoints**
   POST (/api/user/register)
   Request Body:
   {
    "username": "test",
    "password": "password",
    "email": "test@gmail.com"
   }
   POST (/api/user/login)
   Request Body:
   {
    "username": "test",
    "password": "password"
   }

2. **Products Endpoints**
   A. **POST (api/products/createProduct)**
   Request Body:
   {
   "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
        Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   "category": "beauty",
   "price": 9.99,
   "discountPercentage": 7.17,
   "rating": 4.94,
   "stock": 5,
   "tags": [ "beauty","mascara"],
   "brand": "Essence",
   "sku": "RCH45Q1A",
   }
   B. **PUT (/api/products/updateProduct/{productId})**
   Request Body:
   {
   "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
        Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   "category": "beauty",
   "price": 10.99,
   "discountPercentage": 0,
   "rating": 4.94,
   "stock": 500,
   "tags": [ "beauty","mascara"],
   "brand": "Essence",
   "sku": "RCH45Q1A",
   }
   C. **GET (/api/products/getProduct/{productId})**
       Replace the productId to "actual ProducId"
   D. **GET (api/products/getAllProducts)**
   E. **DELETE (api/products/deleteProduct/{productId})**
