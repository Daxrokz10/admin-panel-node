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
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send("Product not found");
    }else{
        console.log('Product found:', product);
        
    }
    res.render('pages/editProduct', { product });
}
module.exports.editProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) { 
            return res.status(404).send("Product not found");
        }else{
            console.log('Product updated:', product);
        }
        res.redirect('/view'); // Redirect to the view page after editing
    } catch (error) {
        console.log('Error updating product:', error);
        res.status(500).send("Error updating product");
    } 
}