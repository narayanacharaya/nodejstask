const User = require('../../models/Users');
const bcrypt = require('bcrypt');

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body; // Assuming your request body contains the fields to update

    // Check if the request body contains a new password
    if (updateData.password) {
      // Hash the new password before updating
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateUserById;
