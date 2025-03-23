const mongoose = require("mongoose")

const schema = mongoose.Schema;

const user_schema= new schema(
    {
        name:{type: String, required: true},
        role:{type: String, required: true},
        ph_no: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String,required:true}
    },
    {timestamps: true}
)

module.exports = mongoose.model("user",user_schema)