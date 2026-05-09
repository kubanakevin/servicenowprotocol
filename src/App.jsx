import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
// import Support from "./pages/SupportUs";
// import Members from "./pages/Members";
import LoadingPage from "./components/LoadingPage";
import BookUs from "./pages/BookUs";
// import BookUs from "./pages/BookUs";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-us" element={<BookUs />} />
        {/* <Route path="/support" element={<Support />} /> */}
        {/* <Route path="/members" element={<Members />} /> */}
      </Routes>
    </Router>
  );
}