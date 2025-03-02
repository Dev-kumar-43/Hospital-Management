const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  speciality: { type: [String], required: true },
  rating: { type: Number, required: true },
  description: { type: String },
  numberOfDoctors: { type: Number },
  numberOfDepartments: { type: Number },
});

module.exports = mongoose.model("Hospital", hospitalSchema);
