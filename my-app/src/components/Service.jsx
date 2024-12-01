import React from "react";

const Services = () => {
  const services = [
    { icon: "🦷", title: "Teeth Whitening" },
    { icon: "🔍", title: "Missing Teeth" },
    { icon: "✨", title: "Teeth Whitening" },
    { icon: "💄", title: "Cosmetic Dentistry" },
    { icon: "👩‍⚕️", title: "Examination" },
    { icon: "😖", title: "Teeth Pain" },
  ];

  return (
    <div className="flex justify-between items-center pr-20 bg-blue-900 text-white p-10">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-5">
          Our Services <span className="border-b-4 border-blue-400 block w-20 mt-2"></span>
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-3xl">{service.icon}</div>
              <div>{service.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-1/2">
        <img
          src=""
          alt="Services"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
