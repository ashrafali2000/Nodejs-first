// console.log("my name is ashraf ali")
// const justCheck = require("./myCheckFolder/check")
// console.log(justCheck)

const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(),"formData.txt");
// Create Server
const server = http.createServer( (req,res) => {
if(req.url === "/"){
    res.write("Hello World")
    res.end();
}else if(req.url === "/form"){
    // res.setHeader("Content-Type", "text/html");
    res.write(`<h1>WellCome to Our Website</h1>
    <div class ='myForm'>
    <form action ='/submit' method ='POST'>
    <lable for='firstName'>First_Name</lable>
    <input type='text' name='firstName' id='firstName' required/><br><br>
    <lable for='lastName'>Last_Name</lable>
    <input type='text' name='lastName' id='lastName' required/><br><br>
    <lable for='email'>Email</lable>
    <input type='email' name='email' id = 'email' required/><br><br>
    <lable for= 'password'>Password</lable>
    <input type='password' name='password' id= 'password' required/><br><br>
    <button> Submit </button>
    </form>
    </div>
    `)
    res.end();
}
else if(req.url === "/submit"){
    // res.write(Data)
    let Data = "";
    req.on("data", chunk => Data += chunk);
    req.on("end",() => {
    fs.readFile(filePath,"utf8",(_,fileData) => {
        const newData = fileData + "\n"+ Data;
        fs.writeFile(filePath, newData, () => {
            res.write("Data ecieved")
            res.end()
        })
    }) 
    })
}
else{
    res.write("404 Error Page not Found")
    res.end()
}

})
server.listen(3000);

