# Task Manager API

## Overview
This project is a scalable backend API with authentication and role-based access control, along with a simple frontend UI to interact with APIs.

---

## Features
- User Registration & Login (JWT Authentication)
- Role-Based Access (User & Admin)
- CRUD APIs for Tasks
- Protected Routes using Middleware
- Swagger API Documentation
- Basic Frontend UI (React)

---

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, bcrypt
- Frontend: React.js
- API Docs: Swagger

---

## Setup Instructions

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm start  

---

## API Endpoints

### Auth
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## API Documentation
Swagger UI available at:
http://localhost:5000/api-docs

---

## Security Practices
- Password hashing using bcrypt
- JWT-based authentication
- Role-based authorization
- Input validation

---

## Scalability Notes
- Modular architecture (controllers, routes, middleware)
- Stateless authentication (JWT)
- Can be scaled using microservices
- Redis caching can be added for performance
- Load balancing can be implemented for high traffic

---

## Future Improvements
- Docker deployment
- Logging system
- Pagination & filtering
- Rate limiting

---

## Author
Param Shinde
