const Product = require('../models/productSchema');

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
        res.redirect('/view'); // Show the form again after saving
    }catch(error){
        console.log(error);
    }
}

module.exports.viewProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('pages/viewProduct', { products });
    } catch (error) {
        console.log('Error fetching products:', error);
        res.status(500).send("Error loading products");
    }
}

module.exports.showEditProduct = async (req, res) => {
    res.render('pages/editProduct', { id: req.params.id });
}