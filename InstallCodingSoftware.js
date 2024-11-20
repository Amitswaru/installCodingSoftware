1) Xampp Control Panel  // apache, Mysql, php, phpmyadmin // PHP Environment.
                        https://www.apachefriends.org/ -> apache, Mysql, php, phpmyadmin -> Install.
                        How to open Xampp // C:/ -> xampp -> xampp-control Application -> Duble click to open -> Pin to taskbar.  
                        deactivate UAC // Run -> msconfig -> tools -> change UAC settings -> Launch -> never notify
2) Visula Studio Code -> https://code.visualstudio.com/download -> Install. // Code Editor.
                        // Extentions
                         1) vscode-icons https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons -> Install.
                         2) Prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode -> Install.
                         3) Live Preview https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server -> Install.             
4) Git Bash https://gitforwindows.org/ -> Download -> Install.
            // view -> command palette -> select default profile -> git bash.
5) Github // git init // Initialise git insdie story directory from the terminal.
3) jQuery CDN https://jquery.com/download/ -> Other CDN -> Google CDN -> 3.x snippet: 
              Add CDN link in index.html // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>   
              Use jQuery https://api.jquery.com/   
              // jQuery is a popular JavaScript library that simplifies HTML document 
              // traversal, event handling, and AJAX interactions. It provides easy-to-use
              // methods for making AJAX calls and handling responses.
              AJAX // AJAX (Asynchronous JavaScript and XML) libraries are JavaScript 
                   // tools or frameworks that simplify the process of making asynchronous 
                   // requests to a server, allowing web applications to update dynamically 
                   // without needing to reload the entire page. AJAX is commonly used to 
                   // send and receive data from the server in the background.

5) Node.js
         nodejs.org // Download the Windows installer from the Nodes.js® web site.
         Download Node.js(LST) // Choose the LST (long-term support) version of Node.
         Run the installer // Accept the license agreement.
         Select npm package manager // Follow the prompts in the installer.
         Restart your computer // After installation restart the compputer.
         node -v | node --version // to confirm if node is installed successfully in the Computer.
                //run the code in Visula Studio Code terminal.
                // node --version // Here v stands for version. 
         Use Native Node Modules https://nodejs.org/docs/latest/api/  
7) NPM // Install NPM
        npm init -y // Terminal -> cd folder path -> npm init -> enter.
                    // To Create a Package.json file.
        npm i packageName // TO install the package. 
        Use NPM https://www.npmjs.com/
6) Nodemon // Install Nodemon Globaly
           npm i -g nodemon // Installing Nodemon package Globaly.
                            // Run this in terminal to install nodemon globaly in the computer.  
                            // Here g stands for global which will install the package globally in the Computer.
                            // Nodemon helps to run and Automatically refresh the server after a change.
           2) nodemon index.js // To run the server from terminal. 
7) Postman API Platform https://www.postman.com/downloads/ -> Download -> Install.
9) Postgres https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649 // Database Server.
10) Python https://www.python.org/downloads/

// Front-end and Back-end------------------------------------------------------
1) Front-end // HTML, CSS, JavaScript. 
             // Client side which is frontend.
2) Back-end // JAVA, RUBY, PHP, C#, Python, JavaScript. 
            // The Serverside is aswell called as Backend.
   Servers, Applications, and Database
// Framework | Library // Python -> Flask, django 
                       // RUBY -> Ruby on Rails
                       // JAVA -> Spring Framework
                       // C# -> ASP.NET
                       // PHP -> Laraval 
                       // JavaScript -> Node.js 

// JavaScript ------------------------------------------------------------------
JavaScript is asyncronous and event driven 

// Minify JavaScript -----------------------------------------------------------
Minify JS code https://www.minifier.org/ -> Copy Code -> Paste -> Minify 

// APIs ------------------------------------------------------------------------
1) GraphQL
2) {SOAP}
3) {REST:API} // We are using.
4) gRPC 

// JavaScript Libraries, Frameworks, Tools And APIs ----------------------------
1) jQuery https://api.jquery.com/
2) Install Node https://nodejs.org/en
   Use Native Node Modules https://nodejs.org/docs/latest/api/
                          // Node.js is a Runtime Environment and not a librery.
                          // This Enables us to use JS on a Computer and not just 
                          // limited to Browser.
                          1) Use NPM https://www.npmjs.com/
                          // Node Package Manager.
                          // NPM is a JS Library which has alot of Tools.                          
3) Install Express.js https://expressjs.com/en/starter/installing.html
                      Use Express https://expressjs.com/en/5x/api.html
                      Use Express Basic Routing https://expressjs.com/en/starter/basic-routing.html
                      Use Express Routing https://expressjs.com/en/guide/routing.html
                      // This is a JS FramWork.
3) Install Axios https://axios-http.com/docs/intro
                 Use Axios https://axios-http.com/docs/api_intro
4) Use Public API https://github.com/appbrewery/public-api-lists
5) Use Rapid API https://rapidapi.com/collection/list-of-free-apis

// EJS -----------------------------------------------------------------------------
index.ejs

*** // Installing Node.js on Windows------------------------------------------------
// Node is basically to run the file with node index.js in command line or Terminal.
// And to Install the NPN( Node Package Manager) in the Terminal.
1) nodejs.org // Download the Windows installer from the Nodes.js® web site.
2) Download Node.js(LST) // Choose the LTS (Long Time Support) version of Node.
3) Run the installer // Accept the license agreement.
4) Select npm package manager // Follow the prompts in the installer.
5) Restart your computer // After installation restart the compputer.
6) node -v // To confirm Node is installed in the computer
           //run the code in Visula Studio Code terminal.
           // node --version // Here v stands for version.
           Use Native Node Modules https://nodejs.org/docs/latest/api/ 
           
// Node commands-------------------------------------------------------------------
1) Node REPL (Read Eval Print Loop) 
2) node // Type this command to enter the node REPL in the terminal.
3) help // Type this command to know about usefull commands in node in the terminal.
4) .break  //  Sometimes you get stuck, this gets you out  
5) .clear //  Alias for .break 
6) .editor//  Enter editor mode  
7) .help  //  Print this help message 
8) .load  //  Load JS from a file into the REPL session  
9) .save  //  Save all evaluated commands in this REPL session to a file 
10) .exit  //  Exit the REPL 
11) Ctrl + D  // to Exit the REPL  
12) Ctrl + C //  to abort current Expression 

// File System Node.js ---------------------------------------------------
// This is a Native Node Module.
Use Node File System -> https://nodejs.org/docs/latest-v18.x/api/fs.html#fswritefilefile-data-options-callback
fs.writeFile(file, data[, options], callback) 

// HTTPS Module ----------------------------------------------------------
Node HTTPS Module https://nodejs.org/docs/latest/api/https.html#https
it Comes pre-build with Node. // Needing to reach out from a server to another server 
                              // is a relativly common need. 

// Import or Require ------------------------------------------------------
1) Require // CJS // Common JS
           const fs = require("fs");
           Example https://nodejs.org/docs/latest/api/fs.html#file-system

2) Import // ESM // ECMAScript Modules
          import express from "express";
          Example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
          Udemy Course https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384340#overview
          // Import is a Standardized way of using JavaScript to be Consistent 
          // on the Front-end and the Back-end.

   package.json -> "type": "module", // To be able to use the ECMAScript Modules. 

// Introduction to Express Middleware --------------------------------------
// The man in the middle. 
1) To handle authentication 
2) To handle errors
3) To handle form data

import express from "express"; // Importing express.
import bodyParser from "body-parser"; // Importin body-parser.

// Making Express app 
const app = Express();

app.use(bodyParser.urlencoded({ extended: true })); // Using bodyParser as Middleware.
// app.use(express.urlencoded({extended: true })); // Express as Middleware.

// Express.js ---------------------------------------------------------------
// Installing Express from Terminal.
npm i express https://expressjs.com/en/starter/installing.html
              Use Express https://expressjs.com/en/5x/api.html

// Importing Express.js in server index.js 
import express, from "express";

// Making Express app 
const app = Express();

// Using the Express app
Use Express API https://expressjs.com/en/5x/api.html
Use Express Basic Routing https://expressjs.com/en/starter/basic-routing.html
Use Express Routing https://expressjs.com/en/guide/routing.html

1) Application
2) Properties
3) Events
4) Methods
          1) app.get
          2) app.use 
          3) app.listem

// HTTP Request Vocab. // HTTP Methods // HyperText Transfer Protocol.
1) GET // Request a resource from the server // eg. text, html page, peice of data excptra
2) POST // Sending a resource to the server
3) PUT // Update methods // Replace a resource whatever you are sending over. 
                         //So you want to update something by replacing it completly. 
4) PATCH // Update methods // When you want to patch up a part of the resource.
5) DELETE // Delete the resource.

// What makes an API Restful ------------------------------------------------
// 1) It uses standard HTTP methods
// 2) It should probebly have a standard data format that it responds with. like JOSN or XML
// 3) Client and server are completly separate. They are able to message each other over a 
   // network in order to make request and also to get back responses.
// 4) Statelessness. Each request from the client to the server should contain all the 
   // information. The server should not store any short of client side data.
// 5) The RestAPI is resource-Based

// Example: The Internet is an Successfull implementation of Restful Architecture. 

// Response.
1) res.send("index.ejs") // Sends a simple response back to the client.
2) res.json() // Sends a JSON response.
3) res.status() // Sets the HTTP status code for the response.
4) res.redirect() // Redirects the client to a different URL.
5) res.render() // Renders a view template and sends the HTML to the client (useful in 
                // web applications with templating engines).
6) res.sendStatus(201) // Sends Status.

// Requset.
1) req.body // Contains data sent by the client in the request body, 
            // typically used in POST or PUT requests.
2) req.params // Contains route parameters (e.g., :id in /user/:id).
3) req.query // Contains query string parameters (e.g., ?name=John in /search?name=John).
4) req.headers // Contains the headers sent by the client.
5) req.method // The HTTP method (e.g., GET, POST) used in the request.

// Responses and thier meaning ------------------------------------------------
1) Information responses (100 - 199) // Hold on 
2) Successfull responses (200 - 299) // Here you go // 200 A ok // 201 is post(something) created
3) Redirection messages (300 - 399) // Go away 
4) Client error responses (400 - 499) // You fucked up // 404 Not Found 
5) Server error responses (500 - 599) // I fucked up 

// Know which port is Listening for interactions from the outside.-------------
netstat -ano | findstr "LISTENING" // Windows // In the Terminal. 
sudo lsof -i -P -n | grep LISTEN // MAC/ LINUX

How to kill a port https://dev.to/sylwiavargas/how-to-properly-close-a-port-2p36 

// To console log the infromation of localhost port 3000 -----------------------
console.log(req.rawHeaders); 

// Axiso | Server Side API Requersts with Axios ------------------------------
// Making requests from your server to another server using Node and Axios.
// HTTPS Module (Native Node Modules)
// installing Axios from Terminal. 
npm i axios // https://www.npmjs.com/package/axios

// Importing Axios in server index.js 
import axios from 'axios';

// Using the Axios.
Use Axios API ->  https://axios-http.com/docs/api_intro

// Request method aliases.



// Axios Structure.
import axios from "axios";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", {activity: response.data }); 
  } catch (error) {
    console.error("Failed to make requset:", error.message);
    res.status(500).send("Failed to fetch activity, Please try again.");
  }
});

// Installing Nodemon package Globaly to automatically reload the server after chagnes in file---
1) npm i -g nodemon // Run this in terminal to install nodemon globaly in the computer.  
                    // Here g stands for global which will install the package globally in.
                    // this computer so we can use it for other projects aswell.
                    // nodemon helps to run and Automatically refresh the server after a change.
2) nodemon index.js // To run the file in terminal. 

*** //Making directory and getting into folder ---------------------------------
1) mkdir "EJS Server" // after getting into backend folder
2) cd "EJS Server" and press Enter // to get into Express Server directory 
                                   // press tab to auto complete the location.
3) touch index.js // to create the index.js file in Express Server directory 
3) mkdir views; touch index.js views/index.ejs // Alternative of 3 and Extras // Doing both things in one command line.
   mkdir public public/images public/styles views views/partials; touch index.js public/styles/styles.css public/styles/function.js views/partials/Header.ejs views/partials/footer.ejs views/index.ejs views/about.ejs views/contact.ejs
4) npm init -y // to create package.json and say yes to all attributes.
5) // If packages already exists in package.json.
"dependencies": {
  "body-parser": "^1.20.2",
  "express": "^4.18.2"
},
5) npm i // to install already existed packages.
5) npm i express // install the Express package in terminal // Alternetive of Number 5
5) npm i ejs // install the ejs package from terminal.
5) npm i body-parser // install the bodyParse package from terminal.
5) npm i express ejs body-parser // to install all the packages at once.
8) "type": "module", // Under "main": "index.js",// In package.json file.
10) Drag and Drop the file location in the terminal.
11) nodemon index.js // to Start and Autorefresh the server.
12) // Check the Directory EJS Server For a total view of making a EJS Server.

***// EJS Server index.js file. --------------------------------------------
import express from "express"; // Importing express.
import bodyParser from "body-parser"; // Importin body-parser.

const app = express();
const port = 3000; // Port set to 3000

app.use(bodyParser.urlencoded({ extended: true })); // Using bodyParser as Middleware.
// app.use(express.urlencoded({extended: true })); // Express as Middleware.

app.get("/", (req, res) => {
  res.render("index.ejs"); // Rendering home page as index.ejs.
});

app.use(express.static("public")); // static files in public folder 
                                   // linking in index.js to index.ejs file.

app.get("/about", (req, res) => { // rendering about page in index.js from index.ejs about link.
  res.render("about.ejs"); 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Listening to port.
});

*** // Ejs Syntax -------------------------------------------------------------
// Different EJS tags
1) <%= variable %> // Gives an output of variables.
2) <% console.log("Hello") %> // Doesn't render anything on the screen. // for js code.
3) <%- <h1>Hello</h1>  %> // Render HTML  // for html code.
4) <%%  %%> // You can Show the EJS tag <% or %> // Escape EJS tag.
5) <%# This is a comment %> // Stop Execution // for comments.
6) <%- include("header.ejs") %> // Insert another ejs file. // to include files.

// EJS file path ---------------------------------------------------------------
1) EJS Server // Folder
    1) public // Folder
        1) images // Folder
        2) styles // Folder
            1) styles.css // File
            2) function.js // File
    2) views // Folder
        1) partials // Folder
            1) Header.ejs // File
            2) footer.ejs // File
        2) index.ejs // File
        3) about.ejs // File
        4) contact.ejs // File
    3) index.js // File
    4) package.json // File

    // In the Terminal to create the folders and files.
    mkdir public public/images public/styles views views/partials; touch index.js public/styles/styles.css public/styles/function.js views/partials/Header.ejs views/partials/footer.ejs views/index.ejs views/about.ejs views/contact.ejs

// Using locals to avoid error finding variable in index.ejs file.------------
locals.numberOfLetters

// This is index.ejs file ---------------------------------------------------- 
        <%- include("partials/header.ejs") %> <>
<li class="nav-item">
    <a class="nav-link" href="/about"><i class="far fa-clone"></i>About</a>
  </li>
    <h1 class="blue"> Hey, it's me</h1>

      <form action="/" method="POST" class="commentdiv">
        <label for="name">Write a Comment:</label><br>
        <textarea name="comment" class="comment" required></textarea><br>
   
        <input type="text" name="name" required class="namespace"> </input><br>
       
        <label for="name" >NAME*</label><br>
      
        <input type="submit" value="Post"> </input>
        </form>

        <div class="newlook"><p><%= locals.name %></p></div>
        <%= locals.comment %>
      

    <%- include("partials/footer.ejs") %> 

{// Header boilerPalte // In the header.ejs file.-----------------------------------
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/main.css" /> 
  <title>Band Generator</title>
</head>

<body>
  <main>

        Write Your Code Here 

{// Footer boilerPlate // In the footer.ejs file. 
</main>

<footer>
  <p>Copyright ©</p>
</footer>

</body>
</html>

// Postgres Database --------------------------------------------------------------
Postgres https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649

// Creat table using SQL inside postgres ------------------------------------------
CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  is_cool BOOLEAN
);

// Postgres Data Types ----------------------------------------------------------
Postgres Data Types https://www.postgresql.org/docs/current/datatype.html

1) VARCHAR(50) // CHAR // String // The value inside is the amount of maximum letters. 
               // Maximum limit is 65,535 bytes (characters)
               // VARCHAR is much better than CHAR due to flexiblity in size copression.
2) INT // Number
3) TEXT // String // Can store much larger amounts of text.
        // INYTEXT, TEXT, MEDIUMTEXT, and LONGTEXT, with LONGTEXT capable of 
        // storing up to 4 GB of data
        // TEXT is better than VARCHAR.
4) BOOLEAN // True or False
5) DATE // Calendar date (year, month, day)

// Auto Increment --------------------------------------------------------------
1) id SERIAL PRIMARY KEY, // Here the SERIAL is Auto Increment. 
2) bigserial // Millions of data // More than Serial.

// Start Postgres Admin --------------------------------------------------------
1) pgAdmin4 -> server15 -> Database -> Create Database
2) Database selected -> Query Tool -> Create a table Or paste a table. -> hit run -> right click on table -> refresh
3) right click on created table -> view / Edit Data -> All rows
4) right click on created table -> view / Edit Data -> First 100 rows // to show only 100 first rows
5) right click on created table -> import / export data -> select file path -> options -> on header -> ok
6) right click on created table -> properties -> Columns -> you can edit if you want -> save
7) right click on created table -> refresh
8) right click on created table -> view / edit data -> all rows -> to see the data
9) If Error happens // see the csv file if it has id, if not delete id in postgres column
                    // to make it auto generated by postgres.

// Creat table also with visual UI ---------------------------------------------
1) Tables -> create -> table // You can create tables visually without code.
2) Add the name of table -> go to columns -> add new columns 

// Create Table in Postgres ----------------------------------------------------
CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country VARCHAR(45),
  capital VARCHAR(45)
);

// Creat Table Example 2 -------------------------------------------------------
CREATE TABLE world_food (
  id SERIAL PRIMARY KEY,
  country VARCHAR(45),
  rice_production FLOAT,
  wheat_production FLOAT
);

// Read data from PostgreSQL Database ------------------------------------------
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});

db.connect(); // Connects to the database.

db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error exicuting query", err.stack);
  } else {
    quiz = res.rows;  
  } 
  
  db.end();
});

// install pg -------------------------------------------------------------------
npm i pg // in the terminal.

// Quering Data -----------------------------------------------------------------
// How to use SELECT, WHERE, and LIKE in PostgreSQL

// SELECT -----------------------------------------------------------------------
SELECT * FROM world_food; // Select all from table name.
SELECT country FROM world_food; // Select specific column from the table.
SELECT country, rice_production FROM world_food; // Select multi-column from the table.

// WHERE Condition --------------------------------------------------------------
// Valid Conditions -> =, >, <, >=, <=
SELECT rice_production FROM world_food WHERE country = 'united states';
SELECT country FROM world_food WHERE wheat_production > 20;

// WHERE LIKE (A lose match) ----------------------------------------------------
// Kind of a search bar where we dont need to put all the letters to get results. 
SELECT country FROM world_food WHERE country LIKE 'United' || '%'; // After united it could be anything.
                                                  // This is Case Sensitive. 
                                                  // here || it means concatinate not Or.     
SELECT country FROM world_food WHERE country LIKE '%' || 'a'; // Where Last letter is a.             



// Git and Github ---------------------------------------------------------------------
// Introducing a powerful Version Control System.
   Git and Github
// Create and save files in github-----------------------------------------------------
1) cd desktop // to go to the desktop directory in the vs code editor terminal.
2) mkdir story // Creating a directory named story.
3) cd story // to get into the story directory.
4) touch chapter1.txt // to create chapter1.txt file in the sotry directory.
5) code chapter1.txt // to open chapter1.txt // open -a for apple and linux.
6) git init // Initialise git insdie story directory 
7) git branch // to check the branch name // master, main branch.
9) git checkout -b main // If your branch is named something else, switch to it using this.
                        //Create the main Branch // Switching to main branch.
10) ls -a // to see hiden files // .git
11) git status // shows whats inside your working directory. // untracked files will be in red.
                                                // red files are not yet in the stagging are.
12) git add chapter1.txt // Added the file to the staging area. 
    git add . // To add all the files to the staging area.
                        // now the added file chapter1.txt should be in green. 
                        // git staus to check the file added and showing green.
13) git rm --cached -r . // To remove all the files from the Staging Area.
14) git commit -m "Complete Chapter 1" // commit message // Shows the changes we have made 
                                       // between the last and current save point.
                                       // "initial commit" // Make a commit.
15) git log // shows what commit you have made. // to see file Complete chapter 1
16) q // to quit log in the terminal.

17) git diff chapter3.txt // if you have deleted the lines of code and saved you can diffrence
                          // from the previours and now. previous line in red and new line
                          // in green.
18) git checkout chapter3.txt // updates you with the previous saved lines of the file.

1) // Working Directory -> Staging Area         -> Local Repository                   -> Remote Repository 
   1) git init          -> git add chapter1.txt -> git commit -m "Complete Chapter 1" -> 1) Create a new repository in github
   2) touch chapter1.txt                                                                 2) git remote add origin https://github.com/Amitswaru/Story.git paste in terminal.
                                                                                         3) git push -u origin main

// How to Pull and Push and Fork and Contribute Open Source Project on Github -----------
1) // git add -> git commit -> git push 

 18) Create a new repository in github // Then link it through next line of code.
 19) git remote add origin https://github.com/Amitswaru/Story.git // paste this link from github story repository to in terminal and hit enter.
 20) git push -u origin main // git push -u <remote name> <branch name> 
                             // Pushes the local repository to remote repository(github)
                             // This links up your local and remote repositories.
                             // Pushes to the branch main.

// Github -> Story -> insights -> Network -> to see the commits.

21) // How to use .gitignore
// Choose which files not to track
    1) touch .gitignore // Create the file in the terminal
    2) secrets.txt // add the files in .gitignore file to be ignored before getting into Staging area.

22) // Git Clone
// How to download and create a copy of a repository.
// Build on existing code.
    1) git clone https://github.com/inolen/quakejs.git // link from the code of quakejs github
    2) cd quakejs
    3) npm install
    4) echo '{ "content": "content.quakejs.com" }' > bin/web.json // From readme quakejs
    5) node bin/web.js --config ./web.json

23) Branching and Merging
// How to use branches to develop features and collaborate on a codebase.
1) Main 
2) Feature 1
3) Feature 2

1) git branch alien-plot // Creating a branch named alien-plot.
2) git branch // To see the branches you have.
3) git checkout alien-plot // to chenge the branch to alien-plot.

1) git merge alien-plot// Feature development with branches

// Forking and Pull Requests
// How to suggest code changes and contribute to an open source project.
1) Fork -> make changes -> save 
2) insights -> networks -> members
3) code -> new pull request
4) pull requests -> commit -> review changes -> Approve -> merge pull request -> confirm merge

// APIs -----------------------------------------------------------------------
// Application Programming Interfaces.
1) API Endpoints // BaseUrl/Endpoints
                 //https://bored-api.appbrewery.com/random // Here the random is endpoint.
    
Example: 
 1) Bored API Documentation https://bored-api.appbrewery.com
                        // Search(Ctrl + F) -> Random
                        GET // https://bored-api.appbrewery.com/random

 2) Paste API link in Postman // GET Request 
                              // https://bored-api.appbrewery.com/random
                              // "activity": "Compliment someone"

2) Multiple Query Parameters https://bored-api.appbrewery.com/endpoint?query=value&query2=value
                          Example : https://bored-api.appbrewery.com/filter?type=education
                                    https://bored-api.appbrewery.com/filter?type=social&participants=2
                                    
You can Filter the type Query with this ->                                 
  education, recreational, social, charity, cooking, relaxation, busywork.

You can use all of them as Query Parameters ->
{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}

3) Path Parameters or Key https://bored-api.appbrewery.com/endpoint/{path-parameter}
                   Identifying a Resource by some specific parameter.
                   Get Activity by Key.
                   Example : https://bored-api.appbrewery.com/activity/3943506

// API Authentication -------------------------------------------------------
0) No Authentication
1) Basic Authentication
2) API Key Authentication
3) Token based Authentication

//JavaScript Objects --------------------------------------------------------
key: value, // Separated by colon(:)
name: "Amit", // you can have Multiple properties in each object simply by a
              // dding a comma(,) after each line.

You can also have arrays inside your object and you can nest an object inside another 
object. 
// Nesting is Amazing.
Example: 
const jack = {
  name: "Amit",
  age: 25,
  education: [
    {
    degree: "B.A. English Literature",
    university: "UCLA",
    },
    {
      degree: "M.S. Criminology & Law",
      university: "UC Berkeley",
    },
  ],
};

// JSON ----------------------------------------------------------------------
// JSON is Flat pack(Compressed) of JavaScript.
Example: .json
{
  "name": "Amit",
  "age": 25,
  "education": [
    {
    "degree": "B.A. English Literature",
    "university": "UCLA",
    },
    {
      "degree": "M.S. Criminology & Law",
      "university": "UC Berkeley",
    },
  ],
}

Serialization // Turning a JavaScript Object into a JSON(flat pack).
// Doint Serialization with a method from the JSON Module.
JS Object -> JSON
const jsonData = JSON.stringify(data);

Unpack JSON // Turning JSON back into JS Object.
JSON -> JS Object
const data = JSON.parse(jsonData);



// keywords and constructs ----------------------------------------------------
1) req.params
2) req.query
3) res.json() // sends a JSON response back to the client. It converts a JavaScript 
              // object or array into a JSON-formatted string.
4) .find(Callback) Method // The call back should return true on a perticular condition. 
5) .filter(joke) Method // 
6) forEach() // 
6) push() // 
7) new Date().getFullYear() // Gets you the current year for Copyright.
8) <p contentEditable="true"> This is my name.</p> // You can change the content in webpage.
8) new Date() // Gets you the full date. 
9) <p spellCheck="false"> This is my name.</p> // Does not underline for spelling mistake.
7) .trim() // 
8) .split(",")
8) toLowerCase() // 
7) jokes.slice(-1) method // it extracts the last element of the array and returns the 
                          // last element wrapped in a new array. 
7) parseInt(string, radix) // Convert a string or other types of values to an integer.
8) result = operand1 || operand2; // logical OR operator. It returns the first "truthy" 
        // operand it encounters or, if none are "truthy," it returns the last operand.
9) array.findIndex(callback(element, index, array), thisArg); // findIndex method used 
                  // on arrays to locate the index of the first element that satisfies 
                  // a provided testing function. If no elements satisfy the condition, 
                  // it returns -1.
10) jokes.splice(searchIndex, 1); // splice() is used to remove an element from the jokes 
                                  // array at a specific position (searchIndex).
10) res.sendStatus(200) // show Status 200 (Ok) if this works. 
  if (searchIndex > -1) {
    jokes.splice(searchIndex, 1);
    res.sendStatus(200);
  }

7) const -> create object
7) => // This is arrow function
   Example: // Regular function
          function add(a, b) {
              return a + b;
          }
          
          // Arrow function
          const add = (a, b) => a + b;

8) function() 
  1) Normal function
    Example:
            const greet = function() {
              console.log("Hello!");
            };

            greet(); // Output: Hello!

  2) anonymous function 
    Example:
            const greet = () => {
              console.log("Hello!");
            };
            
            greet(); // Output: Hello!
9) let // 
// async and await are keywords used to work with asynchronous functions.  
// These are used to simplify working with promises and asynchronous code.       
9) async // This is useful for handling tasks that might take time, like fetching data
         // from a server, without freezing or slowing down the rest of the program.
         // This makes programs more efficient, especially in environments like web 
         // development where non-blocking behavior is essential.
         Example: 
                const fetchData = async () => {
                    const data = await getDataFromDB();
                    return data;
                };

         2 Example:
                  async function fetchData() {
                     console.log("Fetching data...");
                     let data = await fetch("https://api.example.com/data");
                     console.log("Data fetched:", data);
                  }
                  
                  console.log("Start");
                  fetchData();
                  console.log("Continue other work...");

10) await // It is used to pause the execution of a function until a promise 
         // or future resolves, allowing non-blocking operations.
         // In JavaScript, await is used inside an async function. It pauses 
         // the execution of the function until a Promise is resolved or rejected, 
         // making it easier to work with asynchronous code in a synchronous-like manner.
         // await can only be used inside an async function.
         async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
          }
          
          fetchData();
          Explanation: // The await pauses the function until fetch resolves 
                       // (the HTTP request completes), and then waits for the 
                       // response to be converted to JSON.    

11) async, await, anonymous function
// Error handling: You can handle errors with try...catch blocks, 
// like in synchronous code.
// Explaination: Here, async makes fetchData a function that returns a promise, 
// and await makes the code wait for the promise returned by fetch to resolve 
// before continuing.
   Example:
          const fetchData = async () => {
            try {
              let response = await fetch('https://api.example.com/data');
              let data = await response.json();
              console.log(data);
            } catch (error) {
              console.error("Error:", error);
            }
          };

          fetchData();    

          


