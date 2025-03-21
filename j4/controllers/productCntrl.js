const p_M = require("../models/Product_Model")
const response = require("../utils/util")

const getProducts = async(req,res)=>{
    const products = await p_M.find()
    res.status(200).json(products)
}

const addProduct = async(req,res)=>{
    try{
        const body = req.body
        const product = new p_M(data)
        await product.save();
        let resp = response(true, "Product Created Successfully ....!!!", product)
        res.status(201).json(resp)
    }catch(err){
        let resp = response(false);
        res.status(404).json(resp)
    }
}

module.exports = {
    getProducts,
    addProduct
}