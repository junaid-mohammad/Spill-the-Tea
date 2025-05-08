// Importing required modules
import express from "express";          // Express framework for handling web requests
import axios from "axios";              // Axios for making HTTP requests to external APIs
import bodyParser from "body-parser";   // Middleware for parsing form data (URL-encoded)

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// External API URL to fetch random secrets
const API_URL = "https://secrets-api.appbrewery.com/random";

// Middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory (CSS, images, etc.)
app.use(express.static("public"));

/* 
  Route: GET "/"
  Description: Fetches a random secret from the external API and renders the index page.
*/
app.get("/", async (req, res) => {
    try {
        // Fetch a random secret from the external API
        const result = await axios.get(API_URL);

        // Render the "index.ejs" template and pass secret data to the client
        res.render("index.ejs", { 
            secret: result.data.secret,  // Extract and pass the secret from API response
            user: result.data.username   // Extract and pass the associated username
        });
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error("Error fetching secret:", error.message);
        
        // Send an error response with status 404 and display the error message
        res.status(404).send(error.message);
    }
});

/* 
  Start the Express server and listen on the specified port.
  Logs a message to confirm the server is running.
*/
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });