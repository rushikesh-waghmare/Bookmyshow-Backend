/* in this file we are are creating the routes using the modules and sending the data to database the booking 
will be successfull if the data send to data dabe else it will show error. and we are also creating the route to get
recent data sended by the user on route  /booking  */
const express = require("express");
const router = express.Router();
const Schema = require("../models/schema");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // here we are getting urlencoded data with the help of middlewere
app.use(express.json()); // here we using express middlewere to  parse JSON data

// this is the route to handle booking request
router.post("/booking", async (req, res) => {

  // here we are taking data from the request body
  const { movie, slot, seats } = req.body;

  //  here we are creating a new instance of the booking schema with the help of  data
  const myData = new Schema({ movie, slot, seats });

  // now we saving the new booking data to database
  const saved = await myData.save();

  if (saved) {
    // when the booking is successull the success message with the data is send
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    // when booking is not successful  error messege is send in  response with a null data
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});

// creating the route to get the data of most recent booking
router.get("/booking", async (req, res) => {
  const myData = await Schema.find().sort({ _id: -1 }).limit(1); // finding the most recent booking from database
  if (myData.length === 0) {
    // if no booking data is found send a response with a null data and a message
    res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {
    // if booking data is found send a success response with the booking data
    res.status(200).json({ data: myData[0] });
  }
});

module.exports = router; 
