const User = require('../model/user');

exports.register = async (req,res,next)=>{
    try {
        const {
          fullname, nickname, birthday, hometown, gender,
          father, mother, junior_highschool, senior_highschool, favorite_color, userEvents, status, pauli_test, wcst_test, digitspan_test, validation_test
        } = req.body
 
        const user = await User.findOne({fullname, mother})
        if (user) {
            return res.status(401).json({message:"User already exist!"})
        }
        const newUser = await User.create({ fullname, nickname, birthday, hometown, gender,
          father, mother, junior_highschool, senior_highschool, favorite_color, userEvents, status, pauli_test, wcst_test, digitspan_test, validation_test
        })
        return res.status(201).json(newUser)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}