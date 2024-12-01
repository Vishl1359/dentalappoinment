const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    name:
        { type: String, required: true },
    email:
     { type: String, required: true, unique: true },
    phone:
     { type: Number, required: true },
    address:
     { type: String, required: true },
    schedule: 
    
    { type: String, required: true },
    message: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
