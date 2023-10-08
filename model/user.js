const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    nama_lengkap:{
        type:String,
        required:true,
    },
    nama_panggilan:{
      type:String,
      required:true,
    },
    tanggal_lahir:{
      type:String,
      required:true,
    },
    kota_kelahiran:{
      type:String,
      required:true,
    },
    jenis_kelamin:{
      type:String,
      required:true,
    },
    nama_ayah:{
      type:String,
      required:true,
    },
    nama_ibu:{
      type:String,
      required:true,
    },
    nama_smp:{
      type:String,
      required:true,
    },
    nama_sma:{
      type:String,
      required:true,
    },
    warna_favorit:{
      type:String,
      required:true,
    }
});
module.exports = mongoose.model('Users',userSchema);