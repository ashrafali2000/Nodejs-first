// console.log("my name is ashraf ali")
// const justCheck = require("./myCheckFolder/check")
// console.log(justCheck)

const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "formData.txt");
// Create Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/form") {
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
    `);
    res.end();
  } else if (req.url === "/submit") {
    // res.write(Data)
    // let Data = "";
    // req.on("data", chunk => Data += chunk);
    // req.on("end",() => {
    // fs.readFile(filePath,"utf8",(error,fileData) => {
    //     if(error){
    //         res.write(error)
    //         res.end();
    //     }
    //     const newData = fileData + "\n"+ Data;
    //     fs.writeFile(filePath, newData, (error) => {
    //         if(error){
    //             res.write(error)
    //             res.end();
    //         }
    //         console.log(req)
    //         res.write(Data)
    //         res.end()
    //     })
    // })
    // })

    //ATSP  - (Apny Tarap Say Practice)
    let Storage = "";
    req.on("data", (chunk) => (Storage += chunk));
    req.on("end", () => {
      fs.readFile(filePath, "utf8", (err, formFileData) => {
        {
          if (err) {
            res.write(err);
            res.end();
          }
        //   console.log(Storage);
          let newData = formFileData + "\n" + Storage;
          fs.writeFile(filePath, newData, "utf8", (err) => {
            if (err) {
              res.write(err);
              res.end();
            }
            res.write("Data Recieved Sucessfully");
            res.end();
          });
        }
      });
    });
  } else {
    res.write("404 Error Page not Found");
    res.end();
  }
});
server.listen(3000);
