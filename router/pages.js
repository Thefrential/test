const pageinfo = require("../models/pages_schema")
const postinfo = require("../models/posts_schema")
const express = require("express")
const router = express.Router()

router.get("/:slug", (req, res, next) => {
    let param = req.params.slug;
    console.log(req.params)
    console.log(param)
   if (pageinfo[param]){
    res.render("page", pageinfo[param])
   }
   else if (postinfo[param]){
    res.render("post", postinfo[param])
   }
   else{
    next()
   }
   });

  router.use((req, res) => {
   res.render("404")
   });
   
module.exports = router