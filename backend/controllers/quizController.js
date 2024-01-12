const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const mongoose = require('../db');
const quizModel = require('../model/quiz');
const resultModel = require('../model/result')

const getQuestionByCategory = async(req,res)=>{
    const category = req.params.category
    console.log(category);
    try{
        const quiz = await  quizModel.find({
            category:category
        })
        if(!quiz){
            return res.status(404).send({ message: 'No Quizes found' });
        }

        return res.status(200).json({ data: quiz });
    }catch(error){
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await quizModel.find({}).distinct('category');
        const categoriesWithId = categories.map((category, index) => ({
            id: index + 1, // You can use a better way to generate unique ids
            name: category,
        }));

        console.log(categoriesWithId);
        return res.status(200).json({ data: categoriesWithId });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

const storeResult = async(req,res)=>{
    const result = req.body;
    console.log(result);
    const questions = req.body.questions;
    category = req.body.category;
    answer = questions.answer;
    console.log(answer);
    // console.log(req.body.category);
    const token = req.cookies.jwtoken;
    try{
        const decodedToken = jwt.verify(token,process.env.SECRETKEY);
        console.log(decodedToken.email);
        const info ={...result,email:decodedToken.email,userAnswer:answer}
        const newResult = await resultModel.create(info)
        return res.status(201).json({ message: 'Result Stored Successfully', data:newResult });

    }catch(error){
        console.error(error.message);
    }
}

module.exports= {getQuestionByCategory,getCategories,storeResult}