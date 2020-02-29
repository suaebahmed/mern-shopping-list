const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{
        // token = req.header.authorization.split()[0]
        const token = req.header('x-auth-token')
        var decoded = jwt.verify(token,'mysecret')
        req.user = decoded
        
        if(!token){
            res.status(401).json({
                msg: 'no token unauthorize user'
            })
        }
        next();
    }catch(e){
        res.status(400).json({
            msg: "token is not valid"
        })
    }
}