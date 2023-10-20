import express from "express";
const app = express();
const PORT = 3000;

const users = [
  {
    name: "ashraf",
    email: "ashraf42@gmail.com",
  },
  {
    name: "ali",
    email: "ali42@gmail.com",
  },
  {
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
  users.push(req.body)
  res.send({message:"user added sucessfully"})
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
