const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
      type:String,
      default: ''
    },
    publish_date:{
      type:Date,
      required:true,
      default: new Date()
    },
    end_date:{
      type:Date,
      required:true,
    },
    is_active:{
      type:Boolean,
      default:false
    }
});

module.exports = mongoose.model('Events',eventSchema);