const mongoose = require("mongoose");

const placeModel = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  subtitle : {type : String, trim : true},
  image : { type: String, required : true},
  banner_image : { type: String, required : true},
});

const Place = mongoose.model("Place", placeModel)

module.exports = Place