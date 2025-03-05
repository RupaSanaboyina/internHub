import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Rawal",
      role: "Backend Development Intern",
      image: "/1.png",
      review:
        "InternHub’s Backend Development Internship gave me hands-on experience with Node.js, Express, and MongoDB. The real-world projects helped me understand database management, API development, and authentication.",
      rating: 5,
    },
    {
      name: "Aarav Sharma",
      role: "Python Development Intern",
      image: "/2.png",
      review:
        "InternHub’s Python Development Internship was an incredible learning experience. From mastering Python fundamentals to working on real-world projects with Django and Flask, I gained hands-on knowledge that went beyond theory.",
      rating: 4.5,
    },
    {
      name: "Priya Kapoor",
      role: "UI/UX Designer Intern",
      image: "/3.png",
      review:
        "InternHub’s UI/UX Design Internship transformed my career. I gained hands-on experience in wireframing, prototyping, and user research using Figma. Mentors provided valuable feedback, and real-world projects helped me build a strong, professional design portfolio for future opportunities.",
      rating: 4,
    },
    {
      name: "Rahul Varma",
      role: "Frontend Intern",
      image: "/6.png",
      review:
      "InternHub’s Frontend Development Internship provided hands-on experience with HTML, CSS, JavaScript, and React. I built responsive UIs, mastered UI/UX principles, state management, and API integration. With expert mentorship, I developed skills to create high-performing, visually appealing web applications.",
      rating: 5,
    },
    {
      name: "Ramya Chowdary",
      role: "Digital Marketing Intern",
      image: "/5.jpg",
      review:
        "InternHub’s Digital Marketing Internship gave me hands-on experience in SEO, social media marketing, content creation, and paid ads. Real-world projects and mentorship helped me develop data-driven strategies, optimize campaigns, analyze metrics, and build a strong marketing foundation.",
      rating: 4.5,
    },
    {
      name: "Vikram Singh",
      role: "Fullstack Developer Intern",
      image: "/7.png",
      review:
        "InternHub’s Full-Stack Development Internship gave me hands-on experience with React, Node.js, Express, and MongoDB. I mastered API development, authentication, and responsive UI design through real-world projects, gaining the confidence to build and deploy full-fledged web applications.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#E6E6E6] py-12" id="testimonials">
    <h2 className="text-center text-3xl font-bold text-blue-500 mb-4">Testimonials</h2>
    <p className="text-center text-lg font-semibold text-gray-800 mb-8">
      From Intern to Professional – See How Our Students Succeed!
    </p>
  
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/Testimonials_bg.png')" }}
    >
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#DFDFDF] rounded-xl p-6 shadow-lg text-center mx-4 w-80 h-110 flex flex-col justify-between"
          >
            <div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-gray-700 text-sm mb-4">{testimonial.review}</p>
            </div>
  
            <div>
              <div className="flex justify-center items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(testimonial.rating) ? "text-yellow-500" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">({testimonial.rating}/5)</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  </div>
  
  );
};

export default Testimonials;
