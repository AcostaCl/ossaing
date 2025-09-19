import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import Navbar from "./components/common/Menu";
import ServicioDetalle from "./components/pages/ServicioDetalle";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio/:id" element={<ServicioDetalle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
