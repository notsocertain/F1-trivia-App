const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const mongoose = require('../db');
const resultModel = require('../model/result')

const getResults = async(req,res)=>{
    const token = req.cookies.jwtoken;
    try{
        const decodedToken = jwt.verify(token,process.env.SECRETKEY);
        console.log(decodedToken.email);
       // req.user = { email: decodedToken.email, fullName: decodedToken.fullName,favoriteTeam: decodedToken.fullName,dob: decodedToken.favoriteTeam };
        const results = await resultModel.find({
        email:decodedToken.email }).sort({createdAt:-1})
        const info = { ...results, fullName: decodedToken.fullName,favoriteTeam: decodedToken.favoriteTeam,dob:decodedToken.dob,email:decodedToken.email  };
        res.status(200).send(info);
      
    }catch(e){
        res.status(500).send(e.message)
        console.error(e);

    }
}

const getScore = async(req,res)=>{
    const id = req.params.id;
    try{
       score = await resultModel.findOne({_id:id})
       res.status(200).send(results);
    }catch(error){
        res.status(500).send(e.message)
        console.error(e);
    }
}

const getDetailedResult = async(req,res)=>{
    const id = req.params.id;
    try{
        details = await resultModel.findOne({_id:id})
        console.log(details);
        res.status(200).send(details);
        


    }catch(e){
        res.status(500).send(e.message)
        console.error(e);
    }
}

module.exports = {getResults,
                  getScore,
                  getDetailedResult}