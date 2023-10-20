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

fetch("http://localhost:3000/users", {
  headers: { Accept: "application/json",
 "Content-Type": "application.json" },
  method: "POST",
  body: JSON.stringify({ name: "orasoft", email: "ora@gmail.com" })
})
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


//Get Request
app.get("/users", (req, res) => {
  res.send(users);
});

//Post Request
app.post("/users", (req, res) => {
  // console.log("req----> ", req);
  users.push(req.body)
  console.log("req----> ", req.body);
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
