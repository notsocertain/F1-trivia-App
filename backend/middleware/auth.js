const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const auth = async(req,res,next)=>{
    try{
        console.log('middleware is being called');
        const token = req.cookies.jwtoken;
        console.log(token);
        if (!token) {
            console.log("no token");
            return res.status(401).json({ message: "Unauthorized - No token found" });
        }
        const decodedToken = jwt.verify(token,process.env.SECRETKEY);
        console.log(decodedToken);
        req.user = { email: decodedToken.email, fullName: decodedToken.fullName,favoriteTeam: decodedToken.favoriteTeam,dob: decodedToken.dob };
        console.log('Authenticated user:', req.user);
        next();
    }catch(error){
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const userAuth = async(req,res)=>{
    try{
        console.log('Not a middleware');
        const token = req.cookies.jwtoken;
        console.log(token);
        if (!token) {
            console.log("no token");
            return res.status(401).json({ message: "Unauthorized - No token found",data:false });
        }
        const decodedToken = jwt.verify(token,process.env.SECRETKEY);
        console.log(decodedToken);
        req.user = { email: decodedToken.email, fullName: decodedToken.fullName,favoriteTeam: decodedToken.favoriteTeam,dob: decodedToken.dob };
        console.log('Authenticated user:', req.user);
        return res.status(200).json({ message: 'Authorized',data:true});
    }catch(error){
        console.error(error);
        return res.status(500).send(error.message);
    }
}
module.exports= {auth,userAuth};

