const https = require("https")
const fs = require("fs")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require('ejs');
const path = require ('path');
const admin = require(path.join(__dirname, "/admin/adminapp"));
const auth = require(path.join(__dirname, "/modules/auth"));
const auth_pass = require(path.join(__dirname, "/modules/auth_pass"))
const pages = require(path.join(__dirname, "/router/pages"));
const users = require(path.join(__dirname, "/router/users"));


app.set('view engine', 'ejs');

app.use(express.static('public',{index:'index.html'}));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use("/admin", admin);
app.use("/users", users);

app.post("/", (req, res)=>{
  let name = req.body.name;
  let pass = req.body.pass;
  let auth_val = auth(name);
     if (auth_val){
      if(auth_val.status==="loggedin"){
        app.redirect('/users/'+ name + "?login=true");
       }
      if(auth_pass(pass)){
        app.redirect('/users/'+ name + "?login=true");
       }
    app.send("incorrect password")
    }
     else {
    res.send("unable to login, pls signup")
    }
})

app.get("/", (req, res) => {
  res.render("index")
})

app.use("/", pages)

app.use((req, res) => {
  res.render("404");
 });

 https.createServer({ 
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
 }, app)
 .listen(3000, () => {
  console.log("server started on port 3000")
})


console.log(auth("stanley"));