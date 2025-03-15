const express= require("express")
const booksCntrl=require("../controlers/booksCntrl");

const router=express.Router();

router.get("/",booksCntrl.getBooks)
router.get("/:id",booksCntrl.getById)
router.post("/create",booksCntrl.createBook)
router.put("/update/:id",booksCntrl.updateByid)
router.delete("/remove/:id",booksCntrl.removeById)

module.exports = router;