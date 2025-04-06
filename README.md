Book Management System
Overview
The Book Management System is a full-stack web application built using ReactJS, Spring Boot, and MongoDB. It allows users to manage a collection of books with CRUD operations, fetch additional book details from Google Books API, and deploy the application using Netlify (frontend) and Render (backend).
Features
Frontend (ReactJS)
•	Add books with validation
•	Display a sortable list of books
•	Pagination for efficient navigation
•	View book details with API-fetched additional information
•	Delete books directly from the list
Backend (Spring Boot, MongoDB)
•	RESTful API for book management (CRUD operations)
•	Server-side validation
•	Proxy API for external data fetching
•	MongoDB for persistent storage
Technologies Used
•	Frontend: ReactJS, Bootstrap, Netlify
•	Backend: Spring Boot, MongoDB, Render
•	External API: Google Books API
•	Deployment: Netlify (Frontend), Render (Backend)
________________________________________
Setup Instructions
1. Clone the Repository
$ git  https://github.com/ANNDANTIES/Book-mangement
2. Backend Setup (Spring Boot)
Prerequisites:
•	Java 21
•	Maven
•	MongoDB
Steps:
1.	Navigate to the backend folder:
2.	cd backend
3.	Install dependencies:
4.	mvn clean install
5.	Run the application locally:
6.	mvn spring-boot:run
7.	The backend will start at http://localhost:8080.
3. Frontend Setup (ReactJS)
Prerequisites:
•	Node.js 
•	npm
Steps:
1.	Navigate to the frontend folder:
2.	cd frontend
3.	Install dependencies:
4.	npm install
5.	Start the frontend locally:
6.	npm start
7.	The frontend will be available at http://localhost:3000.
________________________________________
Deployment
Backend Deployment (Render)
1.	Push your code to GitHub.
2.	Create a new Web Service on Render.
3.	Select the repository and branch.
4.	Build Command:
5.	mvn clean package
6.	Start Command:
7.	java -jar target/*.jar
8.	Set up Environment Variables:
9.	MONGO_URI=mongodb+srv://anna0906:anna@cluster0.7uq4x.mongodb.net/BookManagement?retryWrites=true&w=majority&appName=Cluster0
10.	GOOGLE_BOOKS_API_KEY=<AIzaSyASzAcnwIdI_wwSh5YyfZNJ04nsWQ8ImDU
11.	Deploy and get the backend URL.
12.	Also test requests in POSTMAN
Frontend Deployment (Netlify)
1.	Push the frontend code to GitHub.
2.	Connect Netlify to the repository.
3.	Set Build Command:
4.	npm run build
5.	Publish Directory: build
6.	Deploy and get the frontend URL.
ISSUE FACING IN BACKEND DEPLOYEMENT
API Documentation
Base URL
1. Add a Book (POST)
•	Endpoint: /api/books
•	Payload:
•	{
•	  "title": "Book Title",
•	  "author": "Author Name",
•	  "publicationDate": "2024-01-01",
•	  "isbn": "1234567890123",
•	  "genre": "Fiction",
•	  "rating": 5
•	}
•	Response:
•	{
•	  "id": "B-001",
•	  "title": "Book Title",
•	  "author": "Author Name"
•	}
2. Get All Books (GET)
•	Endpoint: /api/books
•	Response:
•	[
•	  {
•	    "id": "B-001",
•	    "title": "Book Title",
•	    "author": "Author Name",
•	    "rating": 5
•	  }
•	]
3. Delete a Book (DELETE)
•	Endpoint: /api/books/{id}
4. Get Book Details from Google Books API (GET)
•	Endpoint: /api/books/details/{isbn}
•	Response:
•	{
•	  "title": "Sample Book",
•	  "description": "Detailed book description",
•	  "cover": "https://sample-url.com/image.jpg"
•	}
________________________________________
Database Schema (MongoDB)
{
  "_id": "ObjectId",
  "id": "B-001",
  "title": "Book Title",
  "author": "Author Name",
  "publicationDate": "2024-01-01",
  "isbn": "1234567890123",
  "genre": "Fiction",
  "rating": 5
}
________________________________________
Folder Structure
book-management/
src/main/java # Java source code
pom.xml       # Maven dependencies
frontend/         # ReactJS Frontend
  	 src/          # React source code
package.json  # Node dependencies
README.md         # Documentation
________________________________________
Future Enhancements
•	Implement GraphQL as an API gateway.
•	Support Server-Side Rendering (SSR) using Next.js.
•	Add custom book cover upload functionality.

