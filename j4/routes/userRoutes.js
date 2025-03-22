const express = require("express")
const u_cntrl = require("../controllers/userCntrl")

const router = express.Router()

router.get("/",u_cntrl)

module.exports = router;