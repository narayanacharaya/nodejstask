const User = require("../../models/Users");
const mongoose = require("mongoose");
const getUserById = async (req, res) => {
  console.log(req.params.id);
  
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    } else {
      return res.status(200).json({
        id: user._id,
        username: user.name,
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserById;
