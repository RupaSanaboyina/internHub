import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10 gap-10 bg-[#E6E6E6]" id='hero'>
      {/* Left Text Content */}
      <div className="max-w-3xl">
        <h1 className="text-7xl">Every expert was once an intern</h1>
        <h2 className="text-5xl mt-2">Let’s begin your journey now!</h2>
        <p className="text-gray-600 mt-6 text-2xl">
          Intern Hub is a leading platform connecting students
          <br /> with premium fee-based internships that accelerate 
          <br /> career growth.
        </p>
        <button
          className="bg-[#328FFA] text-white mt-6 px-10 py-5 rounded-lg border-1 border-black hover:cursor-pointer"
          onClick={() => navigate("/apply")}
        >
          Apply Now & Get Certified
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative w-[300px] h-[300px]">
        <img 
          src="Ellipse 1.png" 
          alt="Internship" 
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] rounded-full shadow-lg z-20"
        />
        <img 
          src="Ellipse 2.png" 
          alt="Technology" 
          className="absolute bottom-0 left-0 w-[160px] h-[160px] rounded-full shadow-lg z-10"
        />
        <img 
          src="Ellipse 3.png" 
          alt="AI" 
          className="absolute bottom-0 right-0 w-[160px] h-[160px] rounded-full shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
