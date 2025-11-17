const userModel = require('../models/user.js')
const bcrypt = require('bcrypt');
const userRegister = async(req, res) => {
    try {
     const {name, email, password} = req.body;

     if(!name || !email || !password) {
        return res.status(404).json({
            msg: 'All Fields are required!'
        })
     }

     const isExist = await userModel.findOne({email});



     if(isExist) {
        return  res.status(404).json({
            msg: `This is already registered in this email ${email}`
        })
     }

     const hashPassword = await bcrypt.hash(password, 10);

     await userModel.create({
        name,
        email,
        password: hashPassword
     });

     res.status(200).json({
        msg: 'user is registered successfully'
     })
     

    } catch (error) {
        console.log('user is not register')
    }
}


module.exports = userRegister;

