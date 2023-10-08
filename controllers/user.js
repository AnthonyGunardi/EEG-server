const User = require('../model/user');

exports.getUserById = async(req,res) => {
  const { id } = req.params;
  try {
      const user = await User.findById(id)
      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

exports.getUsers = async(req,res) => {
  try {
      const users= await User.find().sort({ nama_lengkap: -1 });
      res.status(200).json(users);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};
