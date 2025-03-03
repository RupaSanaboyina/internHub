const Testimonials = () => {
    const testimonials = [
      {
        name: "Arjun Rawal",
        role: "Backend Development Intern",
        image: "/1.png",
        review:
          "InternHub’s Backend Development Internship gave me hands-on experience with Node.js, Express, and MongoDB. The real-world projects helped me understand database management, API development, and authentication.",
        rating: 4.5,
      },
      {
        name: "Aarav Sharma",
        role: "Python Development Intern",
        image: "/2.png",
        review:
          "InternHub’s Python Development Internship was an incredible learning experience. From mastering Python fundamentals to working on real-world projects with Django and Flask, I gained hands-on knowledge that went beyond theory.",
        rating: 4.7,
      },
      {
        name: "Priya Kapoor",
        role: "UI/UX Designer Intern",
        image: "/3.png",
        review:
          "InternHub’s UI/UX Design Internship was a turning point in my career. I got hands-on experience in wireframing, prototyping, and user research using Figma. The mentors provided valuable feedback, and the real-world projects helped me build a strong design portfolio.",
        rating: 4.5,
      },
    ];
  
    return (
      <div className="bg-[#E6E6E6] py-12" id="testimonials">
        <h2 className="text-center text-3xl font-bold text-blue-500 mb-4">Testimonials</h2>
        <p className="text-center text-lg font-semibold text-gray-800 mb-8">
          From Intern to Professional – See How Our Students Succeed!
        </p>
  
        <div className="bg-cover bg-center py-12" style={{ backgroundImage: "url('/Testimonials_bg.png')" }}>
          <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#DFDFDF] rounded-xl p-6 shadow-lg text-center">
                {/* Profile Image */}
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
  
                {/* Name and Role */}
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>
  
                {/* Review */}
                <p className="text-gray-700 text-sm mb-4">{testimonial.review}</p>
  
                {/* Star Rating */}
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.floor(testimonial.rating) ? "text-yellow-500" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">({testimonial.rating}/5)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  