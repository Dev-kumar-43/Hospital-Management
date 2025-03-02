const hospitalService = require("../Services/hospitalservice");

// Create a hospital
const createHospital = async (req, res) => {
  try {
    const hospital = await hospitalService.createHospital(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hospitals by city
const getHospitalsByCity = async (req, res) => {
  try {
    const { city } = req.query;
    const hospitals = await hospitalService.getHospitalsByCity(city);
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete hospital
const deleteHospital = async (req, res) => {
  try {
    const { id } = req.query;
    await hospitalService.deleteHospital(id);
    res.status(200).json({ message: "Hospital deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update hospital details
const updateHospital = async (req, res) => {
  try {
    const { id } = req.query;
    const hospital = await hospitalService.updateHospital(id, req.body);
    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add hospital details
const addHospitalDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const hospital = await hospitalService.addHospitalDetails(id, req.body);
    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHospital,
  getHospitalsByCity,
  deleteHospital,
  updateHospital,
  addHospitalDetails,
};
