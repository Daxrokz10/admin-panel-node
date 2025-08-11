const Product = require('../models/productSchema');


module.exports.login = (req,res)=>{
    res.render('pages/loginPage')
}

module.exports.handleLogin = (req,res)=>{
    const {email, password} = req.body;

    const demoUser = {
        email:'dakshgagnani@gmail.com',
        password:'12345'
    };
    if(email === demoUser.email && password === demoUser.password){
        req.session.user = email;
        res.redirect('/home');
    }else{
        res.render('pages/loginPage', { error: 'Invalid email or password' });
    }

};

module.exports.home = (req,res)=>{
    res.render('index');
}

module.exports.showAddProduct = (req,res)=>{
    res.render('pages/addProduct');
};

module.exports.addProduct = async(req,res)=>{
    try{
        const Product = require('../models/productSchema');
        const productData = {
            ...req.body,
            image: req.file ? req.file.filename : undefined
        };
        const product = new Product(productData);
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

module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        console.log('Product deleted:', product);
        res.redirect('/view'); // Redirect to the view page after deletion
    }
    catch (error) {
        console.log('Error deleting product:', error);
        res.status(500).send("Error deleting product");
    }
}