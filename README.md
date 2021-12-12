# Tasks APP
A Task tracking system using React and Django. This is the final project for CS50's Web Programming with Python and JavaScript.

## Distinctiveness and Complexity
This project in particular has been developed using React as frontend and Django as backend and the emphasis has been on how to
connect Django with React and how to integrate complex libraries like react-dnd and django rest framework.
#### Important Features:
1. React Drag and Drop Feature using react-dnd library
2. Django API using django rest framework library.
3. UI styling using Tailwind CSS

## Features:
1. Create Teams
2. Create and Assign Tasks
3. View tasks on Calendar


## This project is divided into two different apps
1) Backend API
2) Frontend App

### Backend API
This part contains the API Logic, 
Django Rest Framework has been used to develop the API using
Models, Serializers and Views

### Frontend App
This part contains the the frontend App, 
React has been used to develop the fronted app
Different folders and files are created but they are mainly categorized into following:
1. API Folder:
This folder contains the API logic to connect with the backend API
2. Hooks:
Contins the react logic to let you use state and other React features without writing a class.
3. Components:
All frontend logic has been written as react components
4. Utilities:
This folder contains the helper functions

## How to run the application
In order to run the application follow the below steps:
1. Create a database and make sure django migrations are run successfully
2. Navigate to tasks_ui folder and run npm install to install all the dependencies
3. use npm run start to start the frontend.
4. Navigate to tasks_api folder and run python3 manage.py to start the backend app

### Note: Please follow the standard react and django documentation for project setup and details.



