const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
    },
    nickname:{
      type:String,
      required:true,
    },
    password:{
      type:String
    },
    birthday:{
      type:String
    },
    hometown:{
      type:String
    },
    gender:{
      type:String
    },
    father:{
      type:String
    },
    mother:{
      type:String
    },
    junior_highschool:{
      type:String
    },
    senior_highschool:{
      type:String
    },
    favorite_color:{
      type:String
    },
    is_active:{
      type:Boolean,
      default:true
    },
    userEvents:{
      type:ObjectId,
      ref:'Events'
    },
    digitspan_test: {
      type:Number
    },
    pauli_test: {
      type:Number
    },
    wcst_test:{
      type:Object
    },
    validation_test:{
      type:Array
    },
    status:{
      type:String,
      required:true
    }
});

module.exports = mongoose.model('Users',userSchema);