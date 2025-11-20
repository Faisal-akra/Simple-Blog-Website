const userModel = require('../models/user.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config()


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


const userLogin = async(req, res) => {
    try {
        const {email, password}= req.body;

        if(!email || !password) {
            return res.status(404).json ({
                msg: 'All Fields are required!'
            })
        }

        const isExist = await userModel.findOne({email});

        if(!isExist) {
            return res.status(404).json({
                msg: `user is not registered in this email ${email}`
            })
        }

        const checkPass = await bcrypt.compare(password, isExist.password);

        if(!checkPass) {
            return res.status(404).json({
                msg: `invalid cridentials`
            })
        }

        const token = jwt.sign({id: isExist._id}, process.env.SECRET_KEY, {expiresIn: '12hr'});

        res.status(200).json({
            msg: `user is login successfully`,
            token: token,
            user: {
                id: isExist._id,
                email: email,
                password: password
            }
        })
      
    } catch (error) {
        console.log('unexpected error')
    }
}



// const userLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validation
//         if (!email || !password) {
//             return res.status(400).json({
//                 success: false,
//                 msg: 'All fields are required!'
//             });
//         }

//         // Check if user exists
//         const isExist = await userModel.findOne({ email });
//         if (!isExist) {
//             return res.status(404).json({
//                 success: false,
//                 msg: `User is not registered with email: ${email}`
//             });
//         }

//         // Check password
//         const checkPass = await bcrypt.compare(password, isExist.password);
//         if (!checkPass) {
//             return res.status(401).json({
//                 success: false,
//                 msg: 'Invalid credentials'
//             });
//         }

//         // Generate token - FIXED THE TYPO
//         const token = jwt.sign(
//             { id: isExist._id }, 
//             process.env.SECRET_KEY, 
//             { expiresIn: '12h' }  // Fixed: 'expiresIn' not 'expireIn'
//         );

//         // Successful response
//         return res.status(200).json({
//             success: true,
//             msg: 'User logged in successfully',
//             token: token,
//             user: {
//                 id: isExist._id,
//                 email: isExist.email,
//                 name: isExist.name // if you have name field
//             }
//         });

//     } catch (error) {
//         // Proper error logging
//         console.error('Login error:', error);
        
//         return res.status(500).json({
//             success: false,
//             msg: 'Internal server error',
//             error: process.env.NODE_ENV === 'development' ? error.message : undefined
//         });
//     }
// }

module.exports = {userRegister, userLogin}



