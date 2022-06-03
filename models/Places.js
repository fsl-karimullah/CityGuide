const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  isEvent: { type: Boolean, default: false },
  eventMessage: { type: String, default: "" },
  service: { type: String, required: true },
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
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});

module.exports = mongoose.model("place", PlaceSchema);
