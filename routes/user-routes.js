const router = require("express").Router();
const User = require('../models/user-modal');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config/config')
const isAuth = require('../middleware/sureAuth')

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body;
    var errArr=[]
    if(!name || !password  || !email){
        errArr.push({msg: 'fill all the feild'})
    }
    if(password.length < 5){
        errArr.push({msg: 'password should be at least 6 character'})
    }
    if(errArr.length > 0){
        res.status(500).json({
            msg: errArr
        })
    }else{
        User.findOne({email: email},(err,user)=>{
            if(err){
                res.status(500).json({
                    msg: "mongoose err",
                    err: err
                })
            }
            else if(user){
                errArr.push({msg: 'user already exists'})
                res.status(500).json({
                    msg: errArr
                })
            }else{
            bcrypt.genSalt(10,(err,selt)=>{
                bcrypt.hash(password,selt,(err,hash)=>{
                    var newUser = new User({
                        name,
                        email,
                        password
                    });
                    console.log(newUser)
                    newUser.password = hash;
                        var _self= newUser
                        var token = jwt.sign(
                            {
                                user: _self
                            },
                            config.jwtSecret,
                            {
                                expiresIn: '1h'
                            }
                        )
                        newUser.save()
                        .then(()=>{
                            res.status(200).json({
                                msg: 'register successfully',
                                user: newUser,
                                token
                            })                    
                        })
                        .catch(err=>{
                            res.status(500).json({
                                Error: err
                            })
                        })
                    })
                })
            }
        })
    }
})

// -----------------------------------

router.post('/signin',(req,res,next)=>{
    const {email,password} = req.body
    User.findOne({email})
        .exec()
        .then(user=>{
            if(!user){
                res.status(500).json({
                    msg: 'Your email is incorrect'
                })
            }else{
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(err){
                        res.status(500).json({
                            Error : err
                        })
                    }
                    else if(!isMatch){
                        return res.status(500).json({ // status code 201
                            msg: 'email / password is incorrect'
                        })
                    }else{
                        var _self=user
                        var token = jwt.sign(
                            {
                                user: _self
                            },
                            config.jwtSecret,
                            {
                                expiresIn: '1h'
                            }
                        )
                        res.status(200).json({
                            msg: 'you successfully sign in',
                            user: user,
                            token
                        })
                    }
                })
            }
        }).catch(err=>{
            res.status(500).json({
                Error: err
            })
        })
    })

router.get('/user',isAuth,(req,res,next)=>{
    User.findById(req.user.user._id)
        .select('-password')
        .exec()
        .then(user=>{
            res.status(200).json({
                msg: 'You get user successfully',
                user
            })
        })
        .catch(err=>{
            res.status(200).json({
                Error: err
            })
        })
})

module.exports = router;