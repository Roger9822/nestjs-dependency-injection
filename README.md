## 📘 Assignment 3 – NestJS Dependency Injection

This assignment demonstrates the use of Dependency Injection, shared services, and module dependencies in NestJS.  
The application is deployed on **Render** and can be tested using **Postman or browser**.

## 🚀 API Testing (Try on Postman / Render)

1) **POST – Create User**  
POST ->  https://nestjs-dependency-injection.onrender.com/users
{
  "name": "Niel",
  "age": 25
}

GET https://nestjs-dependency-injection.onrender.com/users
GET https://nestjs-dependency-injection.onrender.com/users/1


2) **POST – Create Product**  
POST ->  https://nestjs-dependency-injection.onrender.com/products
{
  "product": "Product 1",
  "price": 2000
}

GET https://nestjs-dependency-injection.onrender.com/products
GET https://nestjs-dependency-injection.onrender.com/products/1



3) **POST – Create Order**  
POST ->  https://nestjs-dependency-injection.onrender.com/orders
{
  "userId": 1,
  "productId": 2
}
GET https://nestjs-dependency-injection.onrender.com/orders