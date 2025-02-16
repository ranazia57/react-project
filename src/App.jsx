import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import ContactUs from "./screens/Contactus";
import Aboutus from "./screens/Aboutus";
import LoginPage from "./screens/LoginPage";
import SignupForm from "./screens/SignupForm";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import ProductPage from "./screens/ProductPage";
import Blogs from "./screens/Blogs";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply the theme to the body
  useEffect(() => {
    document.body.className = theme; // Setting theme on body element
    localStorage.setItem("theme", theme); // Saving theme preference
  }, [theme]);

  // State for cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Router>
      <div className="bg-white text-gray-900"> {/* No theme applied here */}
        <Navbar theme={theme} setTheme={setTheme} /> {/* Navbar keeps the theme */}

        {/* Sticky Top Section */}
        <div className="sticky top-0 bg-black text-white text-center py-2 z-10">
          <h1 className="font-semibold text-3xl font-serif">Aura by AZ</h1>
          <h4 className="text-lg">I have created this project for My final Assignment.</h4>
        </div>

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <Footer />

        {/* Invert Cursor Design */}
        <div
          className={`fixed w-3 h-3 bg-slate-300 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all ${
            isHovered ? "bg-black border-2 border-white scale-75" : "bg-slate-300"
          }`}
          style={{
            left: cursorPosition.x + "px",
            top: cursorPosition.y + "px",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </Router>
  );
};

export default App;