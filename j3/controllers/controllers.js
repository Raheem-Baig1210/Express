const userModel = require("../models/userModels");
const { responseObjGenerator } = require("../utils/util");

const getuser = async (req, res) => {
  const products = await userModel.find();
  res.status(200).json(products);
};

const adduser = async (req, res) => {
    try {
      const data = req.body;
      const user = new userModel(data);
      await user.save();
      let resObj = responseObjGenerator(true, "user Added Successfully!", user);
      res.status(201).json(resObj);
    } catch (e) {
      let resObj = responseObjGenerator(false);
      res.status(500).json(resObj);
    }
  };
const removeuser = async(req,res)=>{
  try{
    var a=req.params.id
    await user.deleteOne({_id:a})
    let resObj = responseObjGenerator(true, "Product Deleted Successfully!");
    res.status(200).json(resObj);
  }catch(e){
    console.log(e);
      let resObj = responseObjGenerator(false);
      res.status(500).json(resObj);
    res.status(404).json("User Not Found")
  }
};

const updateuser= async(req,res)=>{
  try{
    var n_id=req.params.id
    var data=req.body;
    const user=await userModel.findOneAndUpdate({_id: n_id}, data , {new:true})
    let resObj = responseObjGenerator(true, "User Updated Successfully!", user);
    res.status(200).json(resObj);

  }catch(e){
    console.log(e)
    let resObj = responseObjGenerator(false);
      res.status(500).json(resObj);
    res.status(404).json("User Not Found")
  }
}

module.exports = {
    getuser,
    adduser,
    removeuser,
    updateuser
  };



  // const deleteProduct = async (req, res) => {
  //   try {
  //     let productId = req.params.id;
  //     await ProductModel.deleteOne({ _id: productId });
  //     let resObj = responseObjGenerator(true, "Product Deleted Successfully!");
  //     res.status(200).json(resObj);
  //   } catch (e) {
  //     console.log(e);
  //     let resObj = responseObjGenerator(false);
  //     res.status(500).json(resObj);
  //   }
  // };