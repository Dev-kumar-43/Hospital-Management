import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HospitalForm from "./pages/HospitalForm";
import HospitalList from "./pages/HospitalList";
import HospitalDetails from "./pages/HospitalDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HospitalList />} />
        <Route path="/add-hospital" element={<HospitalForm />} />
        <Route path="/hospital/:id" element={<HospitalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
