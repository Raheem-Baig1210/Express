const express = require("express")
const p_cntrl = require("../controllers/productCntrl")
const u_cntrl = require("../controllers/userCntrl")

const router = express.Router()

router.get("/",p_cntrl.getProducts)
router.post("/addProduct",p_cntrl.addProduct)

module.exports = router