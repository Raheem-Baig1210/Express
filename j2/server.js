const express = require("express");

const app=express();
app.listen(5000,()=>console.log("Server is runnning....!!!"))

app.use(express.json())


app.use(require("./routes/routes"));
