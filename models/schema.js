/* in this file we are creating the schema using mongoose for the data which we recive for the user*/

const mongoose = require("mongoose");
const { Schema } = mongoose;

// we are creating new schema by the name bookMovieSchema
const bookMovieSchema = new Schema({
  movie: { type: String }, // the name of the movie being booked is set to string
  slot: { type: String }, // the time slot for the movie set to string
  seats: {
    // the object is created for  the seat number with number  type 
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
});

// here we are exporting  the schema as a mongoose model
module.exports = mongoose.model("bookmovietickets", bookMovieSchema);
