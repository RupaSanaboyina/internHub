const Programs = () => {
    return (
      <div className="bg-[#E6E6E6] py-10" id="programs">
        {/* Heading */}
        <h1 className="text-[#328FFA] text-4xl font-bold text-center mb-10">Programs</h1>
  
        {/* Program Cards Grid */}
        <div className="flex flex-col items-center px-2">
          {/* First Row */}
          <div className="w-full flex flex-wrap justify-center gap-1">
            {[
              { src: "/AI.png", title: "AI/ML" },
              { src: "/FSD.png", title: "Full Stack Development" },
              { src: "/Python.png", title: "Python" },
              { src: "/Java.png", title: "Java" },
              { src: "/FED.png", title: "Front-End Development" },
              { src: "/DSA.png", title: "DSA" },
              { src: "/UI.png", title: "UI/UX Design" },
              { src: "/SM.png", title: "Digital Marketing" }
            ].map((program, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-[50%] md:w-[20%] space-y-0">
                <img src={program.src} alt={program.title} className="w-[200px] h-[300px] rounded-lg shadow-md border" />
                <p className="text-lg m-2">{program.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Programs;
  