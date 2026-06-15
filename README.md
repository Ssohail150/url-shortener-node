# URL Shortener

A full-stack URL Shortener application built with Node.js, Express.js, MongoDB, and Vanilla JavaScript. Users can create short URLs, redirect to original URLs, track click counts, and manage generated links.

---

## Features

* Create short URLs from long URLs
* Redirect users using generated short codes
* Track click counts for each URL
* Store click analytics (IP Address & User Agent)
* View recently created URLs
* Delete URLs
* MongoDB database integration
* RESTful API architecture
* Layered Backend Architecture

  * Controllers
  * Services
  * Repositories
  * Models
* Rate Limiting support
* Error Handling Middleware
* Clean UI using Tailwind CSS

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Validator
* Dotenv

### Frontend

* HTML
* Tailwind CSS
* Vanilla JavaScript

---

## Project Structure

```text
URL-SHORTENER
│
├── public
│   ├── index.html
│   └── app.js
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── url.controller.js
│   │
│   ├── models
│   │   ├── Url.js
│   │   └── Click.js
│   │
│   ├── repositories
│   │   ├── url.repository.js
│   │   └── click.repository.js
│   │
│   ├── routes
│   │   └── url.routes.js
│   │
│   ├── services
│   │   ├── url.service.js
│   │   └── click.service.js
│   │
│   ├── utils
│   │   └── shortener.js
│   │
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/url-shortener-node.git
```

```bash
cd url-shortener
```

---

### Install Dependencies

```bash
npm install
```

---

### Create Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

MONGO_URI=mongodb://localhost:27017/url-shortener-node

BASE_URL=http://localhost:3000
```

---

### Start Development Server

```bash
npm run dev
```

Server Output:

```bash
MongoDB Connected
Database: url-shortener-node
Server running on 3000
```

---

## API Endpoints

### Create Short URL

**POST**

```http
/api/v1/shorten
```

Request Body:

```json
{
  "url": "https://google.com"
}
```

Response:

```json
{
  "short_url": "http://localhost:3000/abc123"
}
```

---

### Get All URLs

**GET**

```http
/api/v1/urls
```

Response:

```json
[
  {
    "_id": "...",
    "originalUrl": "https://google.com",
    "shortCode": "abc123",
    "clicks": 10
  }
]
```

---

### Delete URL

**DELETE**

```http
/api/v1/urls/:id
```

Response:

```json
{
  "success": true,
  "message": "URL deleted successfully"
}
```

---

### Redirect URL

**GET**

```http
/:code
```

Example:

```http
http://localhost:3000/abc123
```

Redirects user to:

```http
https://google.com
```

---

## Database Models

### URL Model

```js
{
  originalUrl: String,
  shortCode: String,
  clicks: Number
}
```

---

### Click Model

```js
{
  shortCode: String,
  ipAddress: String,
  userAgent: String
}
```

---

## Application Flow

```text
User enters URL
        │
        ▼
Frontend (app.js)
        │
        ▼
POST /api/v1/shorten
        │
        ▼
Controller
        │
        ▼
Service
        │
        ▼
Repository
        │
        ▼
MongoDB
        │
        ▼
Short URL Generated
        │
        ▼
User clicks Short URL
        │
        ▼
Redirect Controller
        │
        ▼
Find Original URL
        │
        ├── Track Click
        │
        ├── Increment Counter
        │
        ▼
Redirect User
```

---

## Architecture

The project follows a layered architecture:

### Controllers

Handle incoming HTTP requests and responses.

### Services

Contain business logic and validations.

### Repositories

Handle database interactions.

### Models

Define MongoDB schemas.

### Routes

Define API endpoints.

### Middleware

Handle logging, rate limiting, and error handling.

---

## Future Improvements

* User Authentication
* QR Code Generation
* Custom Short URLs
* URL Expiration
* Dashboard Analytics
* Geo-location Tracking
* Search & Filtering
* Pagination
* Docker Support
* Unit & Integration Testing

---

## Author

Sohail Sayed

GitHub: https://github.com/Ssohail150

LinkedIn: https://linkedin.com/in/ssohail150/

---


For explaination

"I built a full-stack URL Shortener application using Node.js, Express.js, MongoDB, Mongoose, HTML, Tailwind CSS, and JavaScript. Users can enter a long URL and the system generates a unique short URL. When someone visits the short URL, the application redirects them to the original website, tracks the click count, and stores click information in MongoDB. I followed a layered architecture using Controllers, Services, Repositories, and Models to keep the code clean and scalable. I also implemented CRUD operations, URL validation, click tracking, and a responsive frontend interface."

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JavaScript
HTML
Tailwind CSS
Validator.js
REST APIs
Key Features
Create short URLs
Redirect to original URLs
Track clicks
Store analytics data
View recent URLs
Delete URLs
MongoDB database integration
Architecture
Routes → Define API endpoints
Controllers → Handle requests/responses
Services → Business logic
Repositories → Database operations
Models → MongoDB schemas