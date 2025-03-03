import React from "react";

const Application = () => {
  return (
    <div className="bg-[#E6E6E6] py-10 px-4" id="apply">
      <h1 className="text-[#328FFA] text-3xl font-bold text-center mb-10">
        Application Process
      </h1>

      {/* Desktop View (Same as your structure) */}
      <div className="hidden md:flex flex-col items-center space-y-10 w-[85%] mx-auto">
        {/* First Row */}
        <div className="flex justify-center items-center space-x-10">
          <ProcessCard imgSrc="/Explore.png" text="Explore Internship Programs" />
          <Arrow />
          <ProcessCard imgSrc="/Form.png" text="Register & Fill Application Form" />
          <Arrow />
          <div className="flex flex-col items-center relative">
            <ProcessCard imgSrc="/Payment.png" text="Payment For Enrollment" />
            {/* Vertical Line + Down Arrow */}
            <div className="flex flex-col items-center -mt-2">
              <div className="border-l-2 border-black h-10"></div>
              <i className="ri-arrow-down-fill text-xl -mt-2"></i>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center items-center space-x-10">
          <ProcessCard imgSrc="/Letter.png" text="Get Offer Letter" />
          <ArrowL />
          <ProcessCard imgSrc="/Tasklist.png" text="Start Internship & Complete Tasks" />
          <ArrowL />
          <ProcessCard imgSrc="/Diploma.png" text="Internship Completion & Certification" />
        </div>
      </div>

      {/* Mobile View (Stacked layout for better responsiveness) */}
      <div className="md:hidden flex flex-col items-center space-y-6 w-[50%] mx-auto">
        <ProcessCard imgSrc="/Explore.png" text="Explore Internship Programs" />
        <ArrowDown />
        <ProcessCard imgSrc="/Form.png" text="Register & Fill Application Form" />
        <ArrowDown />
        <ProcessCard imgSrc="/Payment.png" text="Payment For Enrollment" />
        <ArrowDown />
        <ProcessCard imgSrc="/Letter.png" text="Get Offer Letter" />
        <ArrowDown />
        <ProcessCard imgSrc="/Tasklist.png" text="Start Internship & Complete Tasks" />
        <ArrowDown />
        <ProcessCard imgSrc="/Diploma.png" text="Internship Completion & Certification" />
      </div>
    </div>
  );
};

// Reusable Process Card Component
const ProcessCard = ({ imgSrc, text }) => (
  <div className="flex flex-col items-center w-full md:w-52">
    <div className="bg-[#BBBBBB] p-6 rounded-lg w-full flex justify-center">
      <img src={imgSrc} alt={text} className="w-32 h-32 md:w-40 md:h-40" />
    </div>
    <p className="mt-2 text-center text-lg">{text}</p>
  </div>
);

// Horizontal Arrow Component (for Desktop)
const Arrow = () => (
  <div className="hidden md:flex items-center">
    <hr className="border-t-2 border-black w-16" />
    <i className="ri-arrow-right-fill -ml-1 text-lg"></i>
  </div>
);

const ArrowL = () => (
  <div className="hidden md:flex items-center">
    <i className="ri-arrow-left-fill -mr-1 text-lg"></i>
    <hr className="border-t-2 border-black w-16" />
  </div>
);

// Vertical Arrow Component (for Mobile)
const ArrowDown = () => (
  <div className="md:hidden flex flex-col items-center">
    <div className="border-l-2 border-black h-10"></div>
    <i className="ri-arrow-down-fill text-xl -mt-2"></i>
  </div>
);

export default Application;
