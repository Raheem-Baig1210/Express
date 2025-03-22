const express = require("express")
const p_cntrl = require("../controllers/productCntrl")


const routes = express.Router()

routes.get("/",p_cntrl.getProducts)
routes.post("/addproduct",p_cntrl.addProduct);
routes.put("/update/:id",p_cntrl.update);
routes.delete("/remove/:id",p_cntrl.remove);

module.exports = routes