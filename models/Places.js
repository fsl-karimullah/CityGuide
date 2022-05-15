const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("place", PlaceSchema);
