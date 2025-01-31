# **HNG12 Public API**
## Description
This is a simple public API built for the HNG12 program. It returns a JSON response containing:

My registered email address on HNG12 Slack
The current datetime in ISO 8601 format (UTC)
The GitHub URL of this project’s repository
This API is deployed and publicly accessible.

# API Documentation
Endpoint
GET /
Response Format (200 OK)

          {
            "email": "your-email@example.com",
            "current_datetime": "2025-01-30T09:30:00Z",
            "github_url": "https://github.com/princewilliamske/hng12-public-api"
          }
        
## How to Run Locally
1. Clone the Repository

		git clone https://github.com/Princewilliamske/hng12-public-api.git
		cd hng12-public-api

3. Install Dependencies

		npm install

5. Start the Server

		node index.js

7. Test the API
   
Visit http://localhost:3000/ in your browser or use Postman to check the response.

## Deployment
This API is deployed and publicly accessible at:
[https://hng12-public-api-1tnd.onrender.com]

## GitHub Setup & Contribution Guide
1. Initialize Git & Push to GitHub
If you haven’t linked your project to GitHub yet, follow these steps:

		git init                      # Initialize Git  
		git add .                     # Stage all files  
		git commit -m "Initial commit" # Commit the changes  
		git branch -M main             # Rename default branch to main  
		git remote add origin https://github.com/Princewilliamske/hng12-public-api.git  
		git push -u origin main        # Push to GitHub

3. Pull Latest Changes
If you've already cloned the repo but need the latest updates:

		git pull origin main

3. Contribute to the Project
Fork the repository on GitHub.
- Clone your forked repo:

		git clone [https://github.com/Princewilliamske/hng12-public-api.git]

- Create a new branch for your changes:

		git checkout -b feature-name
  
- Make changes and commit:

		git add .
		git commit -m "Added feature XYZ"
  
- Push your branch and create a Pull Request:

		git push origin feature-name
  
## *Useful Resources*
  - [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
