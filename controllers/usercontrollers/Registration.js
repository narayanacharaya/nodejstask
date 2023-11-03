
const User = require("../../models/Users");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const registration = async (req, res, next) => {
  try {
    
    // Extract  data 
    const { name, email, password } = req.body;
    

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      password: hashedPassword,
      email,
      
    });


    const savedUser = await newUser.save();

    // Return the saved user information
    res.status(200).json({ new_user: savedUser });
  } catch (error) {
    console.error(error);
    // return the eroor with code 500
    res.status(500).json({ error: error.message });
  }
}


module.exports = registration;