import { useState } from "react";
import axios from "axios";

function HospitalForm() {
  const [hospital, setHospital] = useState({
    name: "",
    city: "",
    speciality: [],
    rating: ""
  });

  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const handleSpecialityChange = (e) => {
    setHospital({ ...hospital, speciality: e.target.value.split(",") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/hospitals/create", hospital);
      alert("Hospital added successfully!");
    } catch (error) {
      console.error("Error adding hospital:", error);
    }
  };

  return (
    <div>
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Hospital Name" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="text" name="speciality" placeholder="Specialities (comma-separated)" onChange={handleSpecialityChange} required />
        <input type="number" name="rating" placeholder="Rating" onChange={handleChange} required />
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
}

export default HospitalForm;
