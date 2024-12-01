const express=require("express")
const { userAp } = require("../controller/Apoind")

const Router=express.Router()

Router.route("/Apoint").post(userAp)

module.exports=Router