const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb://127.0.0.1:27017/shopping-list';
mongoose.connect(url, {  useUnifiedTopology: true , useNewUrlParser: true });
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
});
db.on('error', err => {
  console.error('connection error:', err)
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use('/users',require('./routes/user'));
app.use('/items',require('./routes/items'));

app.use((req,res,next)=>{
    var err = new Error('Not found');
    res.status(500).json({
        msg: err.message
    })
})


app.listen(5000,function(){
    console.log('your app is listening port on 5000....');
});
