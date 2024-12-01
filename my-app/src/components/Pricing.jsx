import React from "react";

const Pricing = () => {
  const pricingData = [
    { service: "Teeth Whitening Service at home", stage: "1 times", price: "$115.00" },
    { service: "Teeth Whitening Service at Dental Clinic", stage: "1 times", price: "$100.00" },
    { service: "Ceramic crowns and fillings Dental porcelain", stage: "1 times", price: "$99.00" },
    { service: "Remove crowns, bridges Service", stage: "1 tooth", price: "$50.00" },
    { service: "Covering the recession of the gums", stage: "1 times", price: "$400.00" },
    { service: "Consultation, impressions and preparation of models", stage: "1 times", price: "$35.00" },
    { service: "Removal of an old inlay, old crown", stage: "1 times", price: "$99.00" },
    { service: "Overlay teeth whitening (2 arches)", stage: "1 times", price: "$170.00" },
    { service: "Standard porcelain and zirconium crown on implant", stage: "1 tooth", price: "$499.00" },
    { service: "Implantation of an implant (price depends on system used)", stage: "1 tooth", price: "$600.00" },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Pricing
        <span className="block w-20 h-1 bg-blue-400 mx-auto mt-2"></span>
      </h2>

      <div className="overflow-x-auto mx-auto max-w-4xl">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-4 py-2">Service Names</th>
              <th className="px-4 py-2">Stage</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100`}
              >
                <td className="border px-4 py-2">{item.service}</td>
                <td className="border px-4 py-2">{item.stage}</td>
                <td className="border px-4 py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Read More &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pricing;
