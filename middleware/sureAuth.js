const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{
        //(1)
        const token = req.header('x-auth-token')
        if(!token){
            return res.status(401).json({
                     msg: 'no token unauthorize user'  /// firstly  no token 
                 })
             }
        //(2)
        //token = req.headers.authorization.split(" ")[1]
        //(3)
        //token = req.headers.token
        //var token = req.body.token

        // -- it's important to note here that all headers are represented in lower-case only;
        // -- regardless of how the client actually sent them
        var decoded = jwt.verify(token,'mysecret')
        req.user = decoded
        next();
    }catch(e){
        res.status(400).json({
            msg: "token is not valid"
        })
    }
}