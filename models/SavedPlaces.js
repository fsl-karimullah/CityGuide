const mongoose = require("mongoose");

const SavedPlacesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "place",
    },
  ],
});

module.exports = mongoose.model("savedPlaces", SavedPlacesSchema);
