const profile = require("../models/users_schema")             

   function auth(user){
    for (let x = 0; x < profile.length ; x++){
     if (profile[x]["name"]==user){
          return {status:profile[x]["status"]};
     }
  }
   return null;
   }


module.exports = auth;