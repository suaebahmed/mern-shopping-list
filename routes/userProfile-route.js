const router = require('express').Router();
const Profile = require('../models/profile-modal')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./my-app/public/uploads/')

    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})
// const upload = multer({dest: `./uploads`}) // you should set more datails

router.post('/create', upload.single('image'),(req, res)=>{
    var file = req.file
    const { bio,title,name ,uid} = req.body;

    var userObj = {
        uid,
        name,
        bio,
        title,
        imgName: file.originalname,
        imgPath: `/uploads/${file.originalname}`
    }
    const newProfile = new Profile(userObj);
    newProfile.save()
        .then(()=>{
            res.status(200).json(userObj)
        })
        .catch(err=>{
            res.status(500).json({
                msg: 'not profile created',
                err: err
            })
        })
});

router.get('/:id',(req,res,next)=>{
     const uid = req.params.id;
     Profile.findOne({uid: uid})
            .then(data=>{
                res.status(200).json({
                    msg: 'successfully data created..',
                    user: data
                })
            })
            .catch(err=>{
                res.status(500).json({
                    Error: err
                })
            })
})

router.patch('/update',(req,res,next)=>{
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
      }
      let file = req.files.image;
      file.mv(`./my-app/public/uploads/${file.name}`, function(err) {
      if (err)
          return res.status(500).send(err);
      
      const { bio,title,name ,uid} = req.body;
      console.log(req.body)
      console.log(req.files.image.name)
  
  
      var userObj = {
          uid,
          name,
          bio,
          title,
          imgName: file.name,
          imgPath: `/uploads/${file.name}`
      }

    newProfile.save()
            .then(data=>{
                res.status(200).json({
                    msg: 'successfully data created..'
                })
            })
            .catch(err=>{
                res.status(500).json({
                    Error: err
                })
            })
    });

})

module.exports = router;