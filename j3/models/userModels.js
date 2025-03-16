const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userModels=new Schema(
    {
        role: {type: String, required: true},
        username: {type: String, required: true},
        category: {type: String,required: true},
        Mobile_no: {type:Number, required: true},
        email: {type: String,required: true},
    },
    { timestamps: true }
)

module.exports = mongoose.model("users", userModels);