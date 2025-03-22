const express = require("express")
const p_Routes = require("./productRoutes")
// const u_Routes = require("./userRoutes")

const router = express.Router()

router.use("/products", p_Routes);
// router.use("/user", u_Routes);

module.exports = router;