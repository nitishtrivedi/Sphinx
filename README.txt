Welcome to Our E-Commerce Application Documentation. 
This application is made using MERN Stack. We have Documentation structured with Keywords. Search for Keywords starting in $-- KEYWORD --$ format.

---------------------------------------------------------------------------------------------------------------------------------------------------
$-- CREDENTIALS --$
---------------------------------------------------------------------------------------------------------------------------------------------------
1. MongoDB

DB UID: nitishtrivedi-sphinx
DB PWD: 7350804321




---------------------------------------------------------------------------------------------------------------------------------------------------
$-- COMMANDS --$
---------------------------------------------------------------------------------------------------------------------------------------------------

1. Create React application:
"" npx create-react-app appName ""
We have used the following command:  "npx create-react-app sphinx-frontend"

2. Install React Router DOM:
Commands:
- npm install react-router-dom

3. Install Express in BACKEND:
Commands:
- npm init (Create package.json in backend)
- npm install express (Install ExpressJS for backend)
- npm install nodemon --save-dev (Install nodemon)

4. Create APIs and Call APIs from BACKEND to FRONTEND:
Commands:
- npm install axios (Use in FRONTEND. Used for creating APIs)
- npm install use-reducer-logger --force (Use in FRONTEND. Used to log state changes for reducer.)

5. Install React Bootstrap:
Commands:
- npm install react-bootstrap bootstrap --force (Use in FRONTEND.)
- npm install react-router-bootstrap --force


---------------------------------------------------------------------------------------------------------------------------------------------------
$-- PROGRESS --$
---------------------------------------------------------------------------------------------------------------------------------------------------
1. Created REACT Application. 
Folder Structure is Sphinx > source > sphinx-frontend

2. Created GIT Repository.
Repository name is Sphinx. GIT is initialised in parent folder i.e. "source"

3. Creating First component - Featured Products.
- Created file called data.js in sphinx-frontend > src
- Added metadata for products.
- Created images folder in public/images/
- Added 4 images in the folder.
- Called data.js in app.js file. 
- Created method in <main> called 'data.products.map' to call data from data.js
- Used JSX to create dynamic components in HTML based on the data being passed from data.js

4. Creating Routes:
- Installed React Routes using command 'npm install react-router-dom'
- Imported Routes in app.js using 'import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';'
- Refer to lecture 8 of course for more details. 
- Created Pages, HomeScreen.js and ProductScreen.js in a folder at location /src/screens/
- Components to be displayed on HomeScreen are added in HomeScreen, and same with ProductScreen.
- 'slug' is a parameter that will be passed with an item to point to that specific item. Hence, used slug for routing purposes

5. Configure Backend for the application:
- Created folder 'sphinx-backend' at the ROOT i.e. source/ folder.
- Change directory in CMD to sphinx-backend.
- Run command 'npm init' to create package.json file.
- Create file 'server.js' to create ExpressJS Server.
- Run command 'npm install express' to install Express Server. MAKE SURE TO DO cd sphinx-backend WHEN YOU DO THIS.
- Install nodemon to update changes in the backend realtime. If not done, we need to stop and start server again to update the change.
- Install nodemon using npm install nodemon --save-dev . Using --save-dev because this must not be shipped to PROD and is only for DEV.
- Update package.json by adding  "start": "nodemon server.js" under "scripts"

6. Call Products from Backend to Frontend:
- Set proxy in package.json of FRONTEND which points to Backend. Script is "proxy": "http://localhost:5000"
- Here, we use Axios library for APIs. Use command 'npm i axios' to install Axios in FRONTEND.
- Then, we create Hooks in the HomeScreen.js file. Checkout comment //Hooks in the file. 
- Refer to Hooks Documentation for more details and to lecture 10.

7. Manage State by Reducer Hooks:
- We used State hooks before. Now we used Reducer hooks. The reason is mentioned in the Documentation.
- Create a Reducer function in HomeScreen.js file. Use Switch Case to switch between action types. 
- Reducer accepts two params, state and action. 
- In switch case, we create 3 cases. Request, Success and Fail. 
- We then use 'dispatch' method in HomeScreen function, which is the main app function. 
- We use try-catch to see if the response received from backend was successful. We display data based on the same.
- We install State Reducer Logger - Log State changes by using the command 'npm install use-reducer-logger --force'
- Import logger in HomeScreen.js file. 
- Added Condition based rendering for the main content to be displayed.

Commit 1.1 WAS FOR CODE DEVELOPMENT TILL HERE.
Commit 1.2 FROM REACT BOOTSTRAP ONWARDS

8. Installing React Bootstrap:
- Install React Bootstrap in FRONTEND by using command 'npm install react-bootstrap bootstrap'.
- IN app.js, we converted a simple header to bootstrap header.
- We added bootstrap components like NavBar, LinkContainer, Container etc. 
- Imported NavBar, Container from react-bootstrap/NavBar or Container.
- Install React Router Bootstrap using command 'npm install react-router-bootstrap --force'
- Import LinkContainer from React Router Bootstrap.
- Changed CSS for NavBar. That can easily be done for any component by adding className attribute, and then write CSS for the same in index.css

9. Create Product and Rating Components:
- Create a Rating Component. 
- Created a file Product.js for individual product details. 
- Implemented useReducer in the HomeScreen.js file. 

10. Create Product Screen: 
- 


---------------------------------------------------------------------------------------------------------------------------------------------------
$-- KEYWORD --$
---------------------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------------------------------
$-- REFERENCES --$
---------------------------------------------------------------------------------------------------------------------------------------------------
React Router DOM
https://v5.reactrouter.com/web/guides/quick-start

Axios:
https://www.npmjs.com/package/axios
https://axios-http.com/docs/intro

React State Hook:
https://reactjs.org/docs/hooks-state.html

React Reducer Hook:
https://reactjs.org/docs/hooks-reference.html#usereducer

Bootstrap:
https://getbootstrap.com/

React Bootstrap:
https://react-bootstrap.github.io/