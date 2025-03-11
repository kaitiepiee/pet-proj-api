# Catbook API - Pet Project 

## Project Description
This repository contains the API for Catbook, an anonymous forum where users can upload cat pictures with descriptions, upvote and downvote posts, and delete posts. The API handles CRUD operations and routes are managed using `post.js`.

## Features
- Create, read, update, and delete posts
- Integration with Postman for API testing

## Technologies Used
- Node.js
- Express.js
- Postman

## Getting Started

### Clone the Repository
1. **Clone the repository**:
   ```bash
   git clone https://github.com/kaitiepiee/pet-proj-api.git
   cd pet-proj-api

2. **Install dependencies**:
   ```bash
   npm install


**API Testing with Postman**:
  - Import the Postman collection provided in the repository.
  - Use the collection to test the CRUD operations on the post.js routes

**Routes**:
  - Create a post: POST /posts
  - Read all posts: GET /posts
  - Read a single post: GET /posts/:id
  - Update a post: PUT /posts/:id
  - Delete a post: DELETE /posts/:id
