
const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("../modules/auth");

let auth_user = (re_q, re_s, pro) =>{
let user = re_q.params.d;
let auth_val = auth(user);
   if(re_q.query.login === "true"){
      re_s.render(pro, {title:pro})
    }
   else if (auth_val){
      if(auth_val.status === "loggedin"){
      re_s.render(pro, {title:pro})
      }
      else{
      re_s.redirect("https://localhost:3000/login")
      }
    }
  else {
   re_s.redirect("https://localhost:3000/sign-up")
 }
}

 router.get("/:d", (req, res)=>{
    auth_user(req,res,"profile");
 })

 router.get("/:d/add-post", (req, res)=>{
    auth_user(req,res,"add-post");
 })

 router.get("/:d/edit-post", (req, res)=>{
    auth_user(req,res,"edit-post");
 })
 
 router.get("/:d/delete-post", (req, res)=>{
    auth_user(req,res,"delete-post");
 })
 router.use((req, res) => {
   res.render("404")
   });
module.exports = router;
