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
3. Drag and Drop Tasks
4. View tasks on Calendar


## This project is divided into two different apps
1) Backend API
2) Frontend App

### Backend API
This part contains the API Logic, 
Django Rest Framework has been used to develop the API, file structure for this part is as follows:
1. Models:
Holdes the database representation
2. Serializers: 
Allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types
3. Views: 
Allows you to combine the logic for a set of related views in a single class, called a ViewSet 

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
4. Navigate to tasks_api folder and make sure to install the dependencies in the requirements.txt folder
5. Run python3 manage.py to start the backend app

### Note: Please follow the standard react and django documentation for project setup and details.

![Screenshot 2021-12-13 at 11-25-42 React App](https://user-images.githubusercontent.com/8684065/145766197-de1647fd-cf52-408e-adfd-8297cc2a8433.png)
![Screenshot 2021-12-13 at 11-25-55 React App](https://user-images.githubusercontent.com/8684065/145766223-824e8fe7-2c7b-4276-ba96-6e2a6d98c335.png)
![Screenshot 2021-12-13 at 11-26-08 React App](https://user-images.githubusercontent.com/8684065/145766234-0dfd5401-64c8-4d09-9bc0-fd440624092b.png)

