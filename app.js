const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/shopping-list';
mongoose.connect(url, {  useUnifiedTopology: true , useNewUrlParser: true });
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
});
db.on('error', err => {
  console.error('connection error:', err)
});

app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,x-auth-token, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods','GET,HEAD,POST,DELETE')
  next();
});

app.use('/api/auth',require('./routes/user-routes'));
app.use('/api/items',require('./routes/items-routes'));

app.use((req,res,next)=>{
    var err = new Error('Not found');
    res.status(500).json({
        msg: err.message
    })
})


app.listen(5000,function(){
    console.log('your app is listening port on 5000....');
});
