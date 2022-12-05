const User = require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Sign Up

exports.postSignUp = async (req, res, next) => {
    const {email, password, role, parentCode} = req.body;
    console.log("ewewee");
    try{
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({ error: "User already exists" });
        }
    const hashed_password = await bcrypt.hash(password, 10);
    user = new User({
      
        email,
        password: hashed_password,
        role,
        parentCode,
       
        
    });
    await user.save();
    let count = await (await User.find ({ parentCode })).length;

    return res.status(200).json({ count: count,message: "User created successfully" });
    }catch(err){
        console.log(err)
    }
}

// User Sign In

