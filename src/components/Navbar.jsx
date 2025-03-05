import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import { useNavigate, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  const navigate = useNavigate();
  const location = useLocation();


  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, just scroll to the hero section
      const section = document.getElementById("hero");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate back
      navigate(-1);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <div className="bg-[#E6E6E6]">
      <nav className="bg-[#E6E6E6] w-full">
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-black font-medium text-l">
          <li className="hover:text-blue-500 cursor-pointer" onClick={handleHomeClick}>
        Home
      </li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("programs")}>Programs</li>
            <li
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfWxm7N8SYSqxGn6nnDE1EIPGlrI3RYpoQqiFc9Q7YQBBVSFQ/viewform", "_blank")}
            >
              Apply
            </li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("testimonials")}>Testimonials</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("about")}>About us</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact us</li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-[##E6E6E6] py-4 space-y-4 text-black font-medium text-lg shadow-lg">
            <li className="hover:text-blue-500 cursor-pointer" onClick={handleHomeClick}>
        Home
      </li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("programs")}>Programs</li>
            <li
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfWxm7N8SYSqxGn6nnDE1EIPGlrI3RYpoQqiFc9Q7YQBBVSFQ/viewform", "_blank")}
            >
              Apply
            </li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("testimonials")}>Testimonials</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("about")}>About us</li>
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact us</li>
          </ul>
        )}
      </nav>
      <hr className="border-t-1 border-black" />
    </div>
  );
};

export default Navbar;
