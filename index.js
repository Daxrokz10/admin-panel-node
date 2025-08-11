const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');
const session = require('express-session')

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(__dirname+'/uploads'));
app.use(session({
    secret:'12345',
    resave:false,
    saveUninitialized:true,
}));

const db = require('./config/db');
const Product = require('./models/productSchema');

app.use('/',require('./routers'))

app.listen(port,(err)=>{
    if(!err){
        console.log('Server online on port http://localhost:'+port);
    }else{
        console.log(err.message);
    }
})