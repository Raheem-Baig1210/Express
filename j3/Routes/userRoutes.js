const express = require("express");
const userCtrl = require("../controllers/controllers");

const router = express.Router();

router.get("/", userCtrl.getuser);
router.post("/adduser", userCtrl.adduser);
router.delete("/remove/:id",userCtrl.removeuser)
router.patch("/updateuser/:id", userCtrl.updateuser);
router.put("/updateuser/:id", userCtrl.updateuser);
// router.delete("/deleteProduct/:id", productCtrl.deleteProduct);

module.exports = router;