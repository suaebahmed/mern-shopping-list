const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{
        // token1 = req.header.authorization.split()[0]
        const token = req.header('x-auth-token')
        if(!token){
            return res.status(401).json({
                 msg: 'no token unauthorize user'  /// firstly  no token 
             })
         }
        var decoded = jwt.verify(token,'mysecret')
        req.user = decoded
        next();
    }catch(e){
        // console.log(e)    
        res.status(400).json({
            msg: "token is not valid"
        })
    }
}