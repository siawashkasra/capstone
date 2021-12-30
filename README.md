# Tasks APP
A Task tracking system using React and Django. This is the final project for CS50's Web Programming with Python and JavaScript.

## Distinctiveness and Complexity
Unlike previous projects, this project has been developed considering the complexity in mind.
This project is divided into two parts:
1. Backend API
2. Frontend APP

The backend API is built in Django, it is responsible to receive a request (GET, POST, PUT, DELETE, PATCH) and returning the relevant response,
however unlike the previous projects which had a simple API, this project takes advantage of Django's advanced features like [Rest Framework](https://www.django-rest-framework.org/), 
class-based views and routes. In previous projects, the requests and responses were not secured properly but in this project the authentication
mechanism is through Token authentication whereas after providing the correct username and password, a random token is generated for each user and
this token will be sent with each request otherwise requests are failed and will not be processed.
The frontend application unlike the previous projects is not a bunch of HTML and basic JavaScript, in this project every single page and component has
been developed using React, and react's advanced features like [Hooks](https://reactjs.org/docs/hooks-intro.html), [React Router](https://reactrouter.com/), and third-party packages have been used.
It is safe to say that this project is developed taken distinctiveness in mind, in previous projects, there was not much stress on writing
refactored and modular code, but in this project, most of the codes are refactored for better readability and performance.
In this project performance as stated was taken in mind therefore concepts like Big O is implemented as well, for example instead of writing
two inner loops which would result in O(n^2) two separate loops have been written which has O(n) complexity.
Another special feature in this project is the capability to drag and drop items, to implement this feature [React's dnd](https://react-dnd.github.io/react-dnd/) (drag and drop) library has been studied and integrated with React and Django to achieve the functionality.
In previous projects, views were developed using mere basic HTML pages and CSS but in this project, in particular, [Tailwind CSS](https://tailwindcss.com/) has been integrated
with React to generate sleek and user-friendly views.

## Project Structure:
As stated above this project is divided into two parts, not to mention that this is a big project and there are dozens of files and folders therefore only
the main parts are explained.

###### Backend API
1. **Models:** the files in this folder are responsible to generate the tables in the Database
2. **Serializers:** the files in this folder are responsible to generate responses into JSON
3. **Views:** This file contains all the logic for API endpoints.

###### Frontend APP
1. **API:** this folder contains all the files responsible to interact with the backend API
2. **Hooks:** this folder contains all the react-hooks.
3. **Layouts:** this folder contains the layouts used to organize the pages.
4. **Utilities:** this folder contains all the helper functions used in the fronted-app.
5. **Components:** this folder contains all the pages which are built as separate components.

## Project Overview and features
1. Create Teams and adding members
2. Create and assigning Tasks to members
3. Drag and Drop Tasks
4. View tasks on Calendar

![Screenshot 2021-12-13 at 11-25-42 React App](https://user-images.githubusercontent.com/8684065/145766197-de1647fd-cf52-408e-adfd-8297cc2a8433.png)
![Screenshot 2021-12-13 at 11-25-55 React App](https://user-images.githubusercontent.com/8684065/145766223-824e8fe7-2c7b-4276-ba96-6e2a6d98c335.png)
![Screenshot 2021-12-13 at 11-26-08 React App](https://user-images.githubusercontent.com/8684065/145766234-0dfd5401-64c8-4d09-9bc0-fd440624092b.png)

## How to run the application
To run the application follow the below steps:
1. Create a database and make sure Django migrations are run successfully
2. Navigate to the tasks_ui folder and run ```npm install``` to install all the dependencies
3. Use ```npm run``` start to start the frontend.
4. Navigate to the tasks_api folder and make sure to install the dependencies in the ```requirements.txt``` folder
5. Run ```python3 manage.py``` to start the backend app

**Note:** For further details please check [Django](https://www.djangoproject.com/) and [React](https://reactjs.org/) documentation on project setup.
