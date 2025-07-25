const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/tables',(req,res)=>{
    return res.render('pages/tables');
})

app.get('/form-basic',(req,res)=>{
    return res.render('pages/form-basic');
})
app.get('/form-wizard',(req,res)=>{
    return res.render('pages/form-wizard');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server Start');
        console.log('http://localhost:'+port);   
    }
})