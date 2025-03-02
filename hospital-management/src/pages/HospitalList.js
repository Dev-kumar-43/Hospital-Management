import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgImage from "./hospital.jpg"; // ✅ Ensure the image exists in assets folder

function HospitalList() {
  const [city, setCity] = useState("Delhi");
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    async function fetchHospitals() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/hospitals?city=${city}`);
        
        setHospitals(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    }
    fetchHospitals();
  }, [city]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hospital?")) {
      try {
        await axios.delete(`https://hospital-management-flame-seven.vercel.app/api/v1/hospitals/delete?id=${id}`);
        setHospitals(hospitals.filter((h) => h._id !== id));
        alert("✅ Hospital deleted successfully!");
      } catch (error) {
        console.error("Error deleting hospital:", error);
      }
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bgImage})` }}>
      <div style={styles.overlay}></div> {/* Dark overlay for readability */}
      <h2 style={styles.heading}>🏥 Hospitals in {city}</h2>

      <div style={styles.centerAlign}>
        <select onChange={(e) => setCity(e.target.value)} style={styles.dropdown}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
    <div><a href="add-hospital" >Add Hospital</a></div>
      <div style={styles.hospitalGrid}>
        {hospitals.length > 0 ? (
          hospitals?.map((hospital) => (
            <div key={hospital._id} style={styles.card}>
              <img src={hospital.image} alt={hospital.name} style={styles.hospitalImage} />
              <div style={styles.cardContent}>
                <Link to={`/hospital/${hospital._id}`} style={styles.hospitalName}>
                  {hospital.name}
                </Link>
                <p style={styles.hospitalCity}>📍 {hospital.city}</p>
                <p style={styles.hospitalSpeciality}>🩺 Specialities: {hospital.speciality.join(", ")}</p>
                <p style={styles.hospitalRating}>⭐ Rating: <strong>{hospital.rating}</strong></p>
                <button onClick={() => handleDelete(hospital._id)} style={styles.deleteButton}>
                  🗑 Delete
                </button> 
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noHospitals}>🚫 No hospitals found in {city}.</p>
        )}
      </div>
    </div>
  );
}

// 🔹 Updated Styles for Better UI
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover", // Ensures the background image covers the entire area
    backgroundRepeat: "no-repeat", // Prevents repetition
    backgroundPosition: "center", // Centers the background image
    backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
    position: "fixed",
    color: "#fff",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
    zIndex: "-1",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  dropdown: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#fff",
    transition: "0.3s",
    outline: "none",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  hospitalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.2)", 
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease-in-out",
  },
  cardContent: {
    padding: "10px",
    textAlign: "left",
  },
  hospitalImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  hospitalName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffeb3b",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
  },
  hospitalCity: {
    fontSize: "16px",
    color: "#fff",
    marginTop: "5px",
  },
  hospitalSpeciality: {
    fontSize: "16px",
    color: "#fff",
    marginTop: "5px",
  },
  hospitalRating: {
    fontSize: "16px",
    color: "#fff",
    marginTop: "5px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    width: "100%",
    marginTop: "10px",
    transition: "0.3s",
    fontWeight: "bold",
  },
  noHospitals: {
    fontSize: "18px",
    color: "#fff",
    marginTop: "20px",
    fontWeight: "bold",
    textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
  },
};

export default HospitalList;