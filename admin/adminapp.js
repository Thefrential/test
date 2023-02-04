
const express = require('express')
const admin = express();
admin.use(express.static('admin/public', {index:'index.html'}))
admin.set('view engine', 'ejs')
admin.set('views', __dirname + "\\views")

admin.get("/", (req, res)=>{
  res.render("index")
})
admin.use((req, res, next) => {
  res.send("404 error for admin instance");
 });

 module.exports = admin;
 
