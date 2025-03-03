import React from "react";

const ApplySection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E6E6E6] px-4">
      <div className="relative rounded-2xl shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="relative w-full h-full md:h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('/apply.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-6">
            <h2 className="text-xl md:text-2xl text-black mt-10">
              An internship today, a career tomorrow—apply now!
            </h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWxm7N8SYSqxGn6nnDE1EIPGlrI3RYpoQqiFc9Q7YQBBVSFQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#328FFA] hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg mt-40"
            >
              Continue With Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
