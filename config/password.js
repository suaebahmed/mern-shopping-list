const bcrypt = require('bcrypt')

module.exports = function(passport){
    passport.use(new LocalStategy((username,password)=>{

    }))
    // serialize and deserialize..
    
}