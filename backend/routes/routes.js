const express = require('express');
const router = express.Router();
const { signup,
        login} = require('../controllers/signup')
const { getQuestionByCategory,
        getCategories,
        storeResult} = require('../controllers/quizController')
const {auth,
        userAuth} = require('../middleware/auth')
const { getResults,
        getScore,
        getDetailedResult,
        } = require('../controllers/userController')

// API ENDPOINTS
router.post('/signup',signup);
router.post('/login',login);
router.post('/storeResult',storeResult);

router.get('/categories/:category',auth,getQuestionByCategory);
router.get('/categories',auth,getCategories);

router.get('/results',auth,getScore)
router.get('/profile',auth,getResults);
router.get(`/results/:id`,auth,getDetailedResult);
router.get('/auth',userAuth);


module.exports= router;