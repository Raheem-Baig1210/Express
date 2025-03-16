const express=require("express");
const mongoose = require("mongoose");

const app=express()

app.listen(5000,()=>console.log("Server is up and Started ....!!!!"))

app.use(express.json())

app.use(require("./Routes/Routes"))

mongoose
  .connect("mongodb://127.0.0.1:27017/cgc")
  .then(() => console.log("DB Connected to Server!"))
  .catch((err) => console.log(err));