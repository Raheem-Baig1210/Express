const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(5003, () => console.log("Server Started successfully...!!!"));

app.use(express.json());

app.use(require("./routes/routes"));

mongoose
  .connect("mongodb://127.0.0.1:27017/Practice")
  .then(() => console.log("DataBase is connected....!!!"))
  .catch((err) => console.log(err));
