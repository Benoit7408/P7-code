const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decodesToken = jwt.verify(token, process.env.secretkey);
        const userId = decodesToken.userId;
        req.auth = {userId: userId};
        if(req.body.userId && req.body.userId !== userId){
            throw "User Id non valable" ;
        }else {
            next()
        }
    } catch (error){
        res.status(401).json({message: error | "requete non identifié"})
    }
}