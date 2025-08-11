const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const imageUpload = require('../middleware/imageUploads');

router.get('/',productController.login);
router.post('/',productController.handleLogin);

function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/');
}

router.get('/home', isAuthenticated, productController.home);

router.get('/view', productController.viewProduct);

router.get('/add',productController.showAddProduct);
router.post('/add',imageUpload,productController.addProduct);

router.get('/editProduct/:id',productController.showEditProduct);
router.post('/editProduct/:id',productController.editProduct);

router.get('/deleteProduct/:id',productController.deleteProduct);

module.exports = router;
