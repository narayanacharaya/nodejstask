const User = require("../../models/Users");
const mongoose = require("mongoose");
const deletefun= (req,res,next )=>{
    User.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.json({ message: 'User deleted successfully' });
    })
    .catch(err => {
      console.error('Error deleting User:', err);
      return res.status(500).json({ message: 'Internal server error' });
    });
}
module.exports=deletefun