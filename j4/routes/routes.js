const express = require("express");
const p_Routes = require("./productRoutes");
const user_routes = require("./userRoutes")

const router = express.Router()

router.use("/products", p_Routes);
router.use("/user", user_routes);

module.exports = router;