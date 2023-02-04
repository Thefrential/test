const profile = require("../models/users_schema") 
 
module.exports = function setStatus(pswrd){

    for (let x = 0; x < profile.length ; x++){
        if (profile[x]["password"]===pswrd){
         return true;
        }
     }
      return false;
}