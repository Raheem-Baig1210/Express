const responseGenerator = (success , message , data)=>{
    let resObj={}
    resObj.success = success
    resObj.message = message || (success ? "success":"Failed")
    if(data){
        resObj.data=data
    }
    return resObj
}

module.exports={
    responseGenerator
}