let books = [
    {
      id: 1,
      name: "HTML & CSS",
      price: 400,
    },
    {
      id: 2,
      name: "JavaScript",
      price: 800,
    },
    {
      id: 3,
      name: "React JS",
      price: 1000,
    },
  ];

  const getBooks=(req,res)=>{
    res.status(200).json(books)
  }

  const createBook=(req,res)=>{
    var n1_id=books.length +1
    var newObj={
        "id": n1_id,
        ...req.body
    }
    books.push(newObj)
    res.status(201).json(books)
  }
  const getById=(req,res)=>{
    var n1_id=req.params.id
    var n2=books.find((value)=>value.id===parseInt(n1_id))
    if(n2){
        res.status(200).json(n2)
    }else{
        res.status(404).json("Book Not Found..!!!")
    }
  }
  const updateByid=(req,res)=>{
    var n1_id=req.params.id
    var n2=books.find((value)=>value.id===parseInt(n1_id))
    if (n2){
        n2.name=req.body.name,
        n2.price=req.body.price
        res.status(201).json(n2)
    }else{
        res.status(404).json("Book Not Found...!!!")
    }
}
const removeById=(req,res)=>{
    var n1=req.params.id
    var n3=books.find((value)=>value.id===parseInt(n1))
    if(n3){
    var n2=books.filter((value)=>value.id!==parseInt(n1))
    books=n2
    res.status(200).json(books)
    }else{
        res.status(404).json("Book Not Found...!!!")
    }
}

  module.exports = {
    getBooks,
    createBook,
    getById,
    updateByid,
    removeById
  };
