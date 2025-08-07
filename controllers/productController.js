module.exports.home = (req,res)=>{
    res.render('index');
}

module.exports.showAddProduct = (req,res)=>{
    res.render('pages/addProduct');
};

module.exports.addProduct = async(req,res)=>{
    try{
        const Product = require('../models/productSchema');
        const product = new Product(req.body);
        await product.save();
        console.log('Product added successfully:', product);
        res.redirect('pages/viewProduct'); // Show the form again after saving
    }catch(error){
        console.log(error);
    }
}

module.exports.viewProduct = (req, res) => {
    res.render('pages/viewProduct');
}