const express = require("express")
const u_cntrl = require("../controllers/userCntrl");
const { route } = require("./productRoutes");

const router = express.Router()

router.get("/",u_cntrl.getusers);
router.get("/getuser/:id",u_cntrl.getUserById)
router.post("/adduser",u_cntrl.adduser)
router.put("/update/:id",u_cntrl.update)

module.exports = router;