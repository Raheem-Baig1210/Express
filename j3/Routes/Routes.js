const express=require("express")
const userroutes=require("./userRoutes")
// const userCntrl=require("../controllers/controllers")

const router=express.Router()

router.use("/user",userroutes)

module.exports=router