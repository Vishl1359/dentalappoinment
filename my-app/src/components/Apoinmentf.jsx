import React, { useState } from "react";


const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [schedule, setSchedule] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      phone,
      email,
      address,
      schedule,
      message,
    };


    try {
      const response = await fetch("http://localhost:3001/user/Apoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Appointment booked successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setSchedule("");
        setMessage("");

        console.log(data);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 bg-opacity-90">
      <div className="w-full max-w-5xl bg-white bg-opacity-5 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Book An Appointment
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Choose Your Schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full md:col-span-2 p-3 bg-transparent border bg-slate-700 border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-[30%] md:col-span-2 bg-blue-500 text-white font-bold py-3 ml-[21rem] rounded-md hover:bg-blue-600 transition"
          >
            BOOKING NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
