# VERZEL CHALLENGE

## NODEJS VERSION: 16.14.0

### PROJECT CLONE
  - Clone the project to your machine: git@github.com:thiagoleite92/verzel_challenge.git
### SETUP NO BACKEND
  - In the folder that saved the project, navigate via terminal to the backend folder: /backend
  - Install backend dependencies with npm i command
  - Still in the backend folder, you will need an .env file to configure your database connection and token
  - Follow the instructions in the image
      <img src="https://github.com/thiagoleite92/verzel_challenge/blob/main/backend/bd-setup.png" width="1200" height="650">
  - In the same .env file that you made the database setup, create an environment variable SECRET=secret, just like in the image
  - After you have done these steps, bring the server online with the npm run dev command.
  - By default the project will run on port 3001

### POPULATING DATABASE
  - Still in the backend folder type in the terminal: npx prism migrate dev
  - This command will migrate the database, creating the database, the tables and populating them
     <img src="https://github.com/thiagoleite92/verzel_challenge/blob/main/backend/prisma-migration.png" width="1200" height="650">

### SETUP ON THE FRONTEND
  - Browse via terminal from project root folder to frontend folder
  - Type npm i to install project dependencies
  - Type npm start to start the project
  - By default the project will run on port 3000
  - A new window in your browser will open after executing the command following the link: http://localhost:3000/
  - If it doesn't, open a window in your browser and type the link http://localhost:3000/
  - admin login > email: admin@email.com, password: admin123
  - user login > email: thiago@email.com, password: thiago123

### DISCLAIMER
  - All passwords exposed are for learning purposes only, and do not compromise the security of those who made the project :)

### THANKS
