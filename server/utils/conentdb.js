const mongoose =require("mongoose")
function connectdb(){
  mongoose.connect("mongodb://127.0.0.1:27017/Apoint",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
 .then(()=>{
    console.log("connect data base successfully")
 })
 .catch((error)=>{
    console.log("error",error)
 })

}
module.exports=connectdb