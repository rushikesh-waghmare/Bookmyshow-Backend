/* in this page we are creating the server using express and connecting it to mongodb server 
using mongoose library and listening it on port 8080 */
const express = require('express');
const app = express();
const { connection } = require("./db/connection.js");
const cors = require("cors");
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 8080;


// this is the body parser middleware to parse urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));

// this is the body-parser middleware to parse json data
app.use(bodyParser.json());


app.use(cors());

// here we are calling the database connection function
connection();

app.use("/api", require("./routes/routes.js"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = app;
