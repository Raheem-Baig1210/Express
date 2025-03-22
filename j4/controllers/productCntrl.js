const p_M = require("../models/Product_Model");
const { response } = require("../utils/util");
// console.log(respons(true, "Product Created Successfully ....!!!", product))
const   getProducts = async(req,res)=>{
    const products = await p_M.find()
    res.status(200).json(products)
}

const addProduct = async(req,res)=>{
    try{
        const data = req.body
        const product = new p_M(data)
        await product.save();
        let resp = response(true, "Product Created Successfully ....!!!", product)
        res.status(201).json(resp)
    }catch(err){
        console.log(err)
        let resp = response(false);
        res.status(404).json(resp)
    }
}


const update = async(req,res)=>{
    try{
        const id = req.params.id;
        var body = req.body;
        var product = await p_M.findOneAndUpdate({_id: id},body,{new:true})
        var resp = response(true,"Product Updated Successfully...!!!",product);
        res.status(201).json(resp)
    }catch(err){
        console.log(err)
        let resp = response(false);
        res.status(404).json(resp)
    }
};




const remove = async (req,res)=>{
    try{
        var p_id = req.params.id;
        await p_M.deleteOne({_id:p_id});
        var resp = response(true,"Product deleted successfully ....!!!");
        res.status(202).json(resp)
    }catch(err){
        console.log(err);
        let resp=response(false);
        res.status(404).json(resp)
    }
}




module.exports = {
    getProducts,
    addProduct,
    update,
    remove,
}