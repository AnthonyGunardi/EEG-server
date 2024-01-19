const User = require('../model/user');

exports.register = async (req,res,next)=>{
    try {
        const {
          nama_lengkap, nama_panggilan, tanggal_lahir, kota_kelahiran, jenis_kelamin,
          nama_ayah, nama_ibu, nama_smp, nama_sma, warna_favorit, nama_perusahaan, jabatan, event_id
        } = req.body
 
        // const user = await User.findOne({nama_lengkap, nama_ibu})
        // if (user) {
        //     return res.status(401).json({message:"User already exist!"})
        // }
        const newUser = await User.create({ nama_lengkap, nama_panggilan, tanggal_lahir, kota_kelahiran, jenis_kelamin,
          nama_ayah, nama_ibu, nama_smp, nama_sma, warna_favorit, nama_perusahaan, jabatan, event_id
        })
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}