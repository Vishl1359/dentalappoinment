
import React from "react";

const Stats = () => {
  const stats = [
    { icon: "🌟", value: "20", label: "Years Of Experience" },
    { icon: "❤️", value: "700+", label: "Happy Patients" },
    { icon: "📜", value: "120", label: "Certificate" },
    { icon: "🦷", value: "40+", label: "Dentist" },
  ];

  return (
    <div className="flex justify-center items-center space-x-10 py-10 bg-white">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-blue-500 text-10xl mb-2">{stat.icon}</div>
          <div className="text-5xl font-bold text-gray-800">{stat.value}</div>
          <div className="text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
