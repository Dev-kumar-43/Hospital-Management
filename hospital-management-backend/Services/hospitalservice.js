const Hospital = require("../models/Hospital");

// Create a new hospital
const createHospital = async (data) => {
  return await Hospital.create(data);
};

// Get hospitals by city
const getHospitalsByCity = async (city) => {
  return await Hospital.find({ city: city });
};

// Delete hospital by ID
const deleteHospital = async (id) => {
  return await Hospital.findByIdAndDelete(id);
};

// Update hospital details
const updateHospital = async (id, data) => {
  return await Hospital.findByIdAndUpdate(id, data, { new: true });
};

// Add additional details
const addHospitalDetails = async (id, data) => {
  return await Hospital.findByIdAndUpdate(id, data, { new: true, upsert: true });
};

module.exports = {
  createHospital,
  getHospitalsByCity,
  deleteHospital,
  updateHospital,
  addHospitalDetails,
};
