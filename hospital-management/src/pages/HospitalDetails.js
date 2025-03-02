import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HospitalDetails() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    async function fetchHospital() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/hospitals/details?id=${id}`);
        setHospital(response.data);
      } catch (error) {
        console.error("Error fetching hospital details:", error);
      }
    }
    fetchHospital();
  }, [id]);

  if (!hospital) return <p>Loading...</p>;

  return (
    <div>
      <h2>{hospital.name}</h2>
      <img src={hospital.image} alt={hospital.name} width="200" />
      <p>City: {hospital.city}</p>
      <p>Specialities: {hospital.speciality.join(", ")}</p>
      <p>Rating: {hospital.rating}</p>
      <p>Description: {hospital.description}</p>
      <p>Doctors: {hospital.numberOfDoctors}</p>
      <p>Departments: {hospital.numberOfDepartments}</p>
    </div>
  );
}

export default HospitalDetails;
