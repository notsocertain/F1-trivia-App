const dotenv = require('dotenv')
const mongoose = require('../db');
const bcrypt = require('bcrypt')
const userModel = require('../model/user');
const jwt = require('jsonwebtoken')
const quizModel = require('../model/quiz')

const signup = async(req,res)=>{
    try{
        const userData = req.body;
        const fullName = req.body.fullName;
        const dob = req.body.dob;
        const email = req.body.email;
        const favoriteTeam = req.body.favoriteTeam;
        const password = req.body.password;
        
        console.log(userData);

        //hashing the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        userData.password = hashedPassword;

        const existinguser = await userModel.findOne(
            {email:email}
        )
        if(existinguser){
            return res.status(200).send(`user with email ${email} already exist`)
        }
        const newUser = await userModel.create(userData)
        return res.status(201).json({ message: 'Account Created Successfully' });
        
    }catch(error){
        return res.status(500).json({ error: "Failed" });
        console.error(error);
    }
}

const login = async(req,res)=>{
    try{
        const userData = req.body;
        console.log(userData);

        const user = await userModel.findOne({
            email: userData.email
        })
        if(user){
        const validate = await bcrypt.compare(userData.password,user.password);
        if(validate){
            const token = jwt.sign({
                id:user._id,
                fullName: user.fullName,
                favoriteTeam: user.favoriteTeam,
                email: user.email,
                dob: user.dob,
            },
            process.env.SECRETKEY,{
                expiresIn: '5h'
            });
            res.cookie('jwtoken',token,{
                expiresIn: '5h' ,
                httpOnly: true,
                // sameSite: 'None'
              });  
              //creating new object without user Password to pass as response
              const userWithoutPassword = {                
                fullName: user.fullName,
                favoriteTeam: user.favoriteTeam,
                email: user.email,
                dob: user.dob };
              
              return res.status(200).json({ message: 'Successfully Logged In', data: userWithoutPassword});
              
        }
        return res.status(401).json({ error: "Invalid Credentials" });
       
        }
        return res.status(401).json({ error: "No User Found" });
    }catch(error){
        console.error(error);
        res.status(500).send(error.message)
    }
} 
const logout=async(req,res)=>{
    try{
        const token = req.cookies.jwtoken;
        res.clearCookie('jwtoken');
        res.status(200).json({message: 'Logged out successfully'});

    }catch(error){
        console.error(error.message)
        res.status(500).json({error:'Something went wrong'});
    }
}

module.exports = {signup, login, logout}