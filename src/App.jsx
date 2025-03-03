import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Application from "./components/Application";
import Apply from "./components/Apply";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ApplySection from "./components/ApplySection";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Programs />
            <Application />
            <Apply />
            <Testimonials />
            <About />
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/apply" element={<ApplySection />} />
      </Routes>
    </Router>
  );
}

export default App;
