const asyncHandler = require("express-async-handler");
const Place = require("../Models/placeModel");
const Trip = require("../Models/tripModel");

const addTrip = asyncHandler(async (req, res) => {
  const {
    subtitle,
    options,
    title,
    duration,
    thumbnail,
    place,
    banner_image,
    starting_price,
    discount_price,
    save_money,
    save_percentage,
    pickup_and_drop,
    about,
    photos,
  } = req.body;

  if (
    !title ||
    !thumbnail ||
    !banner_image ||
    !duration ||
    !pickup_and_drop
  ) {
    return res.status(400).send({ message: "Please enter all the fields" });
  }

  const tripExist = await Trip.findOne({ title: title });

  if (tripExist) {
    return res.status(400).send({ message: "Trip already exists" });
  }

  const trip = await Trip.create({
    subtitle,
    options,
    title,
    thumbnail,
    place,
    banner_image,
    duration,
    starting_price,
    discount_price,
    save_money,
    save_percentage,
    pickup_and_drop,
    about,
    photos,
  });

  res.status(200).json(trip);
});

const getTrips = asyncHandler(async (req, res) => {
  const trips = await Trip.find();
  res.status(200).json(trips);
});

const addPlace = asyncHandler(async (req, res) => {
  const { name, subtitle, image, banner_image } = req.body;

  if (!name || !image || !banner_image) {
    return res.status(400).send({ message: "Please enter all fields" });
  }

  const place = await Place.create({ name, subtitle, image, banner_image });

  res.status(200).json(place);
});

const getPlaces = asyncHandler(async (req, res) => {
  const places = await Place.find();
  res.status(200).json(places);
});

const singleTrip = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Trip.findOne({ _id: Object(id) });
  res.status(200).json(result);
});

const tripFilteredByCategory = asyncHandler(async (req, res) => {
  const category = req.query.category;
  const result = await Trip.find({ category: category });
  res.status(200).json(result);
});

const placeDetails = asyncHandler(async (req, res) => {
  const place = req.params.place;
  const result = await Place.findOne({name : place})
  res.status(200).json(result)
});

const tripFileteredByPlace = asyncHandler(async (req, res) => {
  const place = req.params.place;
  const result = await Trip.find({ place: place });
  res.status(200).json(result);
});

const singleTripUnderPlace = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await Trip.findOne({ _id: Object(id) });
  res.status(200).json(result);
});

module.exports = {
  addTrip,
  getTrips,
  addPlace,
  getPlaces,
  singleTrip,
  tripFilteredByCategory,
  tripFileteredByPlace,
  placeDetails,
  singleTripUnderPlace
};
