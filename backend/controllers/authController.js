import asyncHandler from "../middleware/asyncHandler.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserModel.js";

import generateToken from '../utils/generateToken.js'

//@desc Register a new user
//route POST /api/users
//@access Public
const registerUser = asyncHandler(async  (req, res) => {

    const {name, email, password, role, photo, gender}= req.body

    let user =  null;
    
    if(role === 'patient'){
        user = User.findOne({email})
    }
    else if(role ==='doctor'){
        user = Doctor.findOne({email})
    }


    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('user with that email exist')
    }


    if(role === 'patient'){
        user= new User({
name, 
email,
 password,
 photo,
 gender, 
 role
        })
    }else if(role === 'doctor'){
        user= new Doctor({
            name, 
            email,
             password,
             photo,
             gender, 
             role
        })            
    }

    await user.save()
    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400)
        throw new Error('error creating user')
    }

})

export {
    registerUser
}