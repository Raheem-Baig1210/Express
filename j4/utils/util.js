const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const response = (success , message , data) => {
    let resObj={}
    resObj.success = success
    resObj.message = message || (success ? "success":"Failed")
    if(data){
        resObj.data=data
    }
    return resObj
};


const hashPassword = (plainpassword)=>{
    return bcrypt.hash(plainpassword,2)
}
const comparePassword = (plainpassword,hashPassword) => {
    return bcrypt.compare(plainpassword,hashPassword)
}
const generateTokens = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, {expiresIn:"1d"})
}




module.exports={
    response,
    hashPassword,
    comparePassword,
    generateTokens
}