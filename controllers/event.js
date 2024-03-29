const Event = require('../model/event');

exports.getEventById = async(req,res) => {
  const { id } = req.params;
  try {
      const event = await Event.findById(id)
      res.status(200).json(event);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

exports.getEvents = async(req,res) => {
  try {
      const events= await Event.find().sort({ _id: -1 });
      res.status(200).json(events);
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

