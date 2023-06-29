const User = require('../models/UserModel');

const signup = async(req, res) => {

   

    const{name, email, password} =  req.body;

    const  user = await User.create({
        name, email, password
      
    });

    res.status(201).json({
        success: true,
        user
    })
}

const GetAllUser = async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })

}

module.exports = {signup, GetAllUser}