import express from "express";
const app = express();
const PORT = 3000;

const users = [
  {
    id:1,
    name: "ashraf",
    email: "ashraf42@gmail.com",
  },
  {
    id:2,
    name: "ali",
    email: "ali42@gmail.com",
  },
  {
    id:3,
    name: "khan",
    email: "khan42@gmail.com",
  },
];

app.use(express.json());


//Get Request
app.get("/users", (req, res) => {
  res.send(users);
});

//Post Request
app.post("/users", (req, res) => {
  // console.log("req----> ", req);
  //   console.log("req----> ", req.body);
  users.push({id: users.length+1, ...req.body})
  res.send({message:"user added sucessfully"})
});

// Delete Request
app.delete("/users/:id", (req, res)=> {
// console.log("req---->", req.params)
let index = users.findIndex(usr => usr.id === +req.params.id);
users.splice(index, 1)
res.send({message:"user deleted sucessfully"})
})

// Put Request
app.put("/users/:id", (req, res) => {
let index = users.findIndex(usr => usr.id === +req.params.id);
users.splice(index,0, req.body)
res.send({message:"user Updated sucessfully"})
})

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
