const About = () => {
    return (
      <section className="flex flex-col justify-center items-center bg-[#E6E6E6] px-4 py-5" id="about">
        {/* Heading outside the card */}
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">About Us</h2>
  
        {/* Card Container */}
        <div
          className="max-w-5xl shadow-lg rounded-xl p-6 border relative overflow-hidden"
          style={{
            backgroundImage: "url('/About.png')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-xl"></div>
   */}
          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold flex justify-center items-center gap-2">
                  ✅ <span>Who we are</span>
                </h3>
                <p className="text-black mt-2 text-xl">
                  "InternHub is a platform dedicated to bridging the gap between students and
                  real-world industry experience. We offer hands-on internships across various
                  domains, equipping students with the skills needed to thrive in today’s job market."
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold flex justify-center items-center gap-2">
                  ✅ <span>Our Mission</span>
                </h3>
                <p className="text-black mt-2 text-xl">
                  "Empowering students with practical skills, industry exposure, and career
                  opportunities through structured, mentor-led internship programs."
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold flex justify-center items-center gap-2">
                  ✅ <span>Our Vision</span>
                </h3>
                <p className="text-black mt-2 text-xl ">
                  "To become the leading internship provider, helping students build strong
                  portfolios, gain industry knowledge, and secure their dream jobs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  