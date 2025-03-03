const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#E6E6E6]">
      <nav className="bg-[#E6E6E6] w-full">
        <div className="flex justify-between items-center py-4 px-6">
          {/* Left Logo Section */}
          <div className="flex items-center">
            <p className="text-blue-500 text-3xl font-bold flex items-center tracking-tight">
              <img src="logo.png"/>
            </p>






          </div>




          {/* Right Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-black font-medium text-l">
            <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection("hero")}>Home</li>
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
        </div>
      </nav>
      <hr className="border-t-1 border-black" />
    </div>
  );
};

export default Navbar;
