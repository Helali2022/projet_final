import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
// import Contact from './pages/Contact';
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Gym from "./pages/Gym";
import Restaurant from "./pages/Restaurant";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<ContactForm />} />
          <Route path="Hotel" element={<Hotel />} />
          <Route path="Restaurant" element={<Restaurant />} />
          <Route path="Gym" element={<Gym />} />
          <Route path="/RestaurantDetails" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
