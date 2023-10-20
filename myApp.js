import express from "express"
const app = express();
const PORT = 3000;

//Get Request
app.get("/ashraf", (req, res) => {
        res.send("Hell World");
})

// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})