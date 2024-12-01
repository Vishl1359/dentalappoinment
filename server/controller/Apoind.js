// const Apoint = require("../model/database");

// exports.userAp=async(req,res)=>{
//     console.log(Apoint)
//     try{
//         const {name,email,phone,address,shadule,message}=req.body;

        
//         user=await Apoint.create({
//             name,
//             email,
//             phone,
//             address,
//             shadule,
//             message
            
            
//         })
//         const options={
//           expires:new Date(Date.now()+90*24*60*60*1000),
//           httpOnly:true
//         }
//         res.status(201).json({
//           success:true,
//           user,
  
//         })
//     }
//     catch(error){
//         res.status(500).json({
//             success:false,
//             message:error.message,
//         })
//     }
// }

const Apoint = require("../model/database"); // Import the model

exports.userAp = async (req, res) => {
    try {
        const { name, email, phone, address, schedule, message } = req.body;

        // Debug: Ensure req.body and model are correct
        console.log(req.body);
        console.log(Apoint);

        // Create a new appointment
        const user = await Apoint.create({
            name,
            email,
            phone,
            address,
            schedule,
            message,
        });

        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
