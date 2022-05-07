const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Place = require("../../models/Places");

//get all places
router.get("/", auth, async (req, res) => {
  try {
    const places = await Place.find({ user: req.user.id }).sort({ date: -1 });
    res.json(places);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//post a place
router.post(
  "/",
  auth,
  check("name", "Name is required").not().isEmpty(),
  check("description", "Description is required").not().isEmpty(),
  check("location", "Location is required").not().isEmpty(),
  check("address", "Address is required").not().isEmpty(),
  check("image", "Image is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, image, description, location, address } = req.body;

    try {
      const newPlace = new Place({
        name,
        image,
        description,
        location,
        address,
        user: req.user.id,
      });
      const place = await newPlace.save();
      res.json(place);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//update a place
router.put("/:id", auth, async (req, res) => {
  const { name, image, description, location, address } = req.body;
  const placeField = {};
  if (name) placeField.name = name;
  if (image) placeField.image = image;
  if (description) placeField.description = description;
  if (location) placeField.location = location;
  if (address) placeField.address = address;

  try {
    let place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ msg: "Place not found" });

    //make sure user own place
    if (place.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    place = await Place.findByIdAndUpdate(
      req.params.id,
      { $set: placeField },
      { new: true }
    );
    res.json(place);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//delete a place
router.delete("/:id", auth, async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ msg: "Place not found" });
    }

    //make sure user own place
    if (place.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await Place.findByIdAndRemove(req.params.id);
    res.json({ msg: "Place removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
