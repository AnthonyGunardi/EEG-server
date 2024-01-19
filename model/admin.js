const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    nama:{
        type:String,
        required:true,
    },
    username:{
      type:String,
      required:true,
    },
    password:{
      type:String,
      required:true,
    },
    is_active: {
      type: Boolean,
      default: true
    },
    is_superadmin: {
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('Admins',adminSchema);