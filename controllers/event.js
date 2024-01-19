const Event = require('../model/event');

exports.getUserById = async(req,res) => {
  const { id } = req.params;
  try {
      const user = await User.findById(id)
      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

exports.getActiveEvents = async(req,res) => {
  try {
      const today = new Date();
      const events= await Event.find({
        is_active: true,
        publish_date:{$lte: today.getTime()},
        end_date:{$gte: today.getTime()}
      }).sort({ _id: -1 });
      res.status(200).json(events);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

exports.updateUserById = async(req,res) => {
  const { id } = req.params;
  try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, { $set: req.body }, { new: true }
      )
      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};
