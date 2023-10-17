// console.log("my name is ashraf ali")
// const justCheck = require("./myCheckFolder/check")
// console.log(justCheck)

// Create Server
const http = require("http");
const server = http.createServer( (req,res) => {
if(req.url === "/"){
    res.write("Hello World")
    res.end();
}else if(req.url === "/form"){
    res.write(`<h1>WellCome to Our Website</h1>
    <div class ='myForm'>
    <form action='/submit' method='POST'>
    <lable for='firstName'>First_Name</lable>
    <input type='text' id='firstName' required/><br><br>
    <lable for='lastName'>Last_Name</lable>
    <input type='text' id='lastName' required/><br><br>
    <lable for='email'>Email</lable>
    <input type='email' id = 'email' required/><br><br>
    <lable for= 'password'>Password</lable>
    <input type='password' id= 'password' required/><br><br>
    <button type ='submit'>Submit</button>
    </form>
    </div>
    `)
}
})
server.listen(3000);

