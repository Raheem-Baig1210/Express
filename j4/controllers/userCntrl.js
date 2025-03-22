const u_M = require("../models/user_Model");
const { response } = require("../utils/util");

const getusers = async (req, res) => {
  try {
    const users = await u_M.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    let resp = response(false);
    res.status(404).json(resp);
  }
};

const getUserById = async (req, res) => {
  try {
    var id = req.params.id;
    const users = await u_M.find();
    let u;
    for (const val of users) {
      if (val._id == id) {
        u = val;
      }
    }
    if (u) {
      let resp = response(true, "User Found", u);
      res.status(200).json(resp);
    } else {
      let resp = response(false, "User Not Found");
      res.status(200).json(resp);
    }
  } catch (err) {
    console.log(err);
    let resp = response(false);
    res.status(404).json(resp);
  }
};

const adduser = async (req, res) => {
  try {
    var data = req.body;
    const user = new u_M(data);
    await user.save();
    let resp = response(true, "User added successfully ...!!!!", user);
    res.status(201).json(resp);
  } catch (err) {
    console.log(err);
    var resp = response(false);
    res.status(404).json(resp);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await u_M.findOneAndUpdate({ _id: id }, data, { new: true });
    const resp = response(true, "User Updated Successfully ....!!!", user);
    res.status(201).json(resp);
  } catch (err) {
    console.log(err);
    let resp = response(false);
    res.status(404).json(resp);
  }
};

module.exports = {
  getusers,
  adduser,
  update,
  getUserById,
};
