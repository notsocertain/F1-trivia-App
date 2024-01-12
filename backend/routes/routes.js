const express = require('express');
const router = express.Router();
const { signup,
        login,
        logout} = require('../controllers/signup')
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
router.post('/storeResult',auth,storeResult);

router.get('/categories/:category',auth,getQuestionByCategory);
router.get('/categories',auth,getCategories);

router.get('/score/:id',auth,getScore)
router.get('/profile',auth,getResults);
router.get(`/results/:id`,auth,getDetailedResult);
router.get('/auth',userAuth);
router.get('/logout',auth,logout);


module.exports= router;