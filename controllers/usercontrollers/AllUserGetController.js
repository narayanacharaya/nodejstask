const User = require("../../models/Users");
 const getuseres=async(req,res)=>{
    console.log(req.param.id)
    await  User.find().then((user)=>{
        console.log(user);
       
          return res.status(200).json(
           user
          )
        
     
      })}
      module.exports=getuseres