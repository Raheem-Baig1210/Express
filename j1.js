const express = require("express");

const app = express();

var books=[
    {
        id: 1,
        Book_name: "JavaScript",
        price: 3000
    },
    {
        id: 2,
        Book_name: "Express",
        price: 1000
    },
    {
        id: 3,
        Book_name: "Node.js",
        price: 4000
    },
    {
        id: 4,
        Book_name: "Python",
        price: 8000
    },
    {
        id: 5,
        Book_name: "React_JS",
        price: 2000
    }
]

app.listen(5000, () => console.log("Server is Up & Running!"));

app.use("/health", (req, res) => {
  res.status(200);
  res.send("Welcome to my Express Server!");
});

app.get("/books", (req, res) => {
    res.status(200).json(books)
});
app.get("/books/:num", (req, res) => {
    var n1=req.params.num
    var b=books.find((value)=> value.id==n1)
    if(b){
        res.status(200);
        res.send(b);    
    }else{
        res.status(404).json("Book Not Found")
    }
});
app.post("/books/add",(req,res)=>{
    var n1=books.length.id +1
    
})