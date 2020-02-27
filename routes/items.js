const router = require("express").Router();
const Items = require('../models/products')

router.get('/',(req,res,next)=>{
    Items.find()
         .exec()
         .then(result=>{
            res.status(200).json({
                msg: 'successfully  you get data',
                count: result.length,
                products: result
            })
         })
         .catch(err =>{
             res.status(500).json({
                 Error: err
             })
         })
})
router.post('/',(req,res,next)=>{
    var newItems = new Items({
        name: req.body.name
    });
    console.log(newItems)
    newItems.save()
         .then(result=>{
            res.status(200).json({
                msg: 'successfully the data is saved',
                products: result
            })
         })
         .catch(err =>{
             res.status(500).json({
                 Error: err
             })
         })
})
router.delete('/:id',(req,res,next)=>{
    var id = req.params.id;

    Items.deleteOne({_id: id})
         .then(()=>{
            res.status(200).json({
                msg: 'successfully  the data is removed',
            })
         })
         .catch(err =>{
             res.status(500).json({
                 Error: err
             })
         })
})
module.exports = router;