import express from "express"
const app = express();
const PORT = 3000;

const users = [
    {
        name: "ashraf",
        email:"ashraf42@gmail.com"
    },
    {
        name: "ali",
        email:"ali42@gmail.com"
    },
    {
        name: "khan",
        email:"khan42@gmail.com"
    }
]
//Get Request
app.get("/users", (req, res) => {
        res.send(users);
})

// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})