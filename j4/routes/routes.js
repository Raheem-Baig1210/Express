const express = require("express")


const router = express.Router()

router.use("./products",require("./productRoutes"))
router.use("./user",require("./userRoutes"))

module.exports=router