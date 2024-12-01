import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-10 py-16 bg-gray-50">
      <div className="w-full max-h-56 py-[17rem] bg-blue-900">
       image
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Vestibulum condimentum, risus sedones honcus rutrum, salah lacus
          mollis zurna, nec finibusmi velit advertis. Proin vitae odin quis
          magna aliquet laciniae. Etiam auctor, nisi vel. Pellentesque ultrices
          nisl quam iaculis, nec pulvinar augue.
        </p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-gray-800 font-medium mb-2">
              <span>Experience Dentist</span>
              <span>80%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-gray-800 font-medium mb-2">
              <span>Modern Equipment</span>
              <span>65%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-gray-800 font-medium mb-2">
              <span>Friendly Staff</span>
              <span>85%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
