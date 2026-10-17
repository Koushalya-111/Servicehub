import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Booking from "./Pages/Booking";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<Service />} />

        {/* About */}
        <Route
          path="/about"
          element={
            <div className="min-h-screen bg-slate-950 p-10 text-white">
              <h1 className="text-4xl font-bold"><About/></h1>
            </div>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-slate-950 p-10 text-white">
              <h1 className="text-4xl font-bold"><Contact/></h1>
            </div>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <div className="min-h-screen bg-slate-950 p-10 text-white">
              <h1 className="text-4xl font-bold"><Login/></h1>
            </div>
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            <div className="min-h-screen bg-slate-950 p-10 text-white">
              <h1 className="text-4xl font-bold"><Register/></h1>
            </div>
          }
        />

        {/* Booking */}
        <Route
          path="/booking"
          element={
            <div className="min-h-screen bg-slate-950 p-10 text-white">
              <h1 className="text-4xl font-bold">{<Booking/>}</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
