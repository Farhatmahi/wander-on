const mongoose = require("mongoose");

const tripSchema = mongoose.Schema(
  {
    subtitle: { type: String, trim: true, required: true },
    options: [{ type: String}],
    title: { type: String, trim: true, required: true },
    place : {type : String, trim : true},
    thumbnail: { type: String, trim: true, required: true },
    banner_image: { type: String, trim: true, required: true },
    duration: { type: String, trim: true, required: true },
    starting_price: { type: String, trim: true },
    discount_price : {type : String, trim : true},
    save_money : {type : String, trim : true},
    every_weekend : {type : String, trim : true},
    save_percentage : {type : String, trim : true},
    pickup_and_drop: { type: String, trim: true, required: true },
    about: [{ type: String, trim: true }],
    highlights : [{ type: String, trim: true }],
    photos: [{ type: String}],
    category : { type : String, trim : true},
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
