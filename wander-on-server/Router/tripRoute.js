const express = require('express');
const router = express.Router()
const {addTrip, getTrips, addPlace, getPlaces, singleTrip, tripFilteredByCategory, tripFileteredByPlace, placeDetails, singleTripUnderPlace} = require('../Controllers/tripController');

router.route('/add-trip').post(addTrip)
router.route('/get-trips').get(getTrips)
router.route('/add-place').post(addPlace)
router.route('/get-places').get(getPlaces)
router.route('/single-trip/:id').get(singleTrip)
router.route('/trip-filtered-by-category').get(tripFilteredByCategory)
router.route('/trip-filtered-by-place/:place').get(tripFileteredByPlace)
router.route('/:place').get(placeDetails)
router.route('/place/:id').get(singleTripUnderPlace)

module.exports = router