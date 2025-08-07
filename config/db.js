const mongoose = require('mongoose');
const db = mongoose.mongoose.connect('mongodb+srv://dakshgagnani:sainath96@products.jcrhxnb.mongodb.net/product',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("Database could not be connected");
    console.error(err);
});



