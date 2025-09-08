import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar is outside Routes so it shows on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Optional: keep Footer global too */}
      <Footer />
    </BrowserRouter>
  );
}
