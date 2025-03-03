const Apply = () => {
    return (
      <div className="relative bg-[#E6E6E6]">
        {/* Background Section */}
        <div
          className="relative h-auto min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center text-center text-white"
          style={{
            backgroundImage: "url('/Apply_bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay for better readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
  
          {/* Text Content */}
          <div className="relative z-10 px-4">
            <h2 className="text-xl md:text-5xl  mt-10">
              Limited Seats Available – Apply Before It's Too Late!
            </h2>
  
            {/* Buttons in a column */}
            <div className="flex flex-col gap-4 items-center">
              <button className="bg-[#838D99] text-black  py-5 px-8 rounded-md shadow-lg hover:bg-[#083A94] transition mt-40 border-2 border-black text-xl">
                Secure Your Spot Today!
              </button>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWxm7N8SYSqxGn6nnDE1EIPGlrI3RYpoQqiFc9Q7YQBBVSFQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#328FFA] hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg mt-40"
            >
              Apply Now
            </a>
            </div>
          </div>
        </div>





        <div className="bg-[#D9D9D9] rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center border border-black mt-20">
      {/* Icons Section */}
      <div className="flex justify-center gap-10 mb-6">
        {/* Certified */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full p-4">
            <img src="/Guarantee.png" alt="Certified" className="w-25 h-25" />
          </div>
          <p className="font-bold mt-2 text-lg">Certified</p>
        </div>

        {/* Skilled */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full p-4">
            <img src="/Skilled.png" alt="Skilled" className="w-25 h-25" />
          </div>
          <p className="font-bold mt-2 text-lg">Skilled</p>
        </div>

        {/* Hired */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 rounded-full p-4">
            <img src="/Hired.png" alt="Hired" className="w-25 h-25" />
          </div>
          <p className="font-bold mt-2 text-lg">Hired</p>
        </div>
      </div>

      {/* Text Section */}
      <p className="font-bold text-2xl">That’s the InternHub way!</p>
    </div>
        
      </div>
    );
  };
  
export default Apply;
