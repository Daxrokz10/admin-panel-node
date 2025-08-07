const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/',productController.home);
router.get('/add',productController.showAddProduct);
router.post('/add',productController.addProduct);

module.exports = router;
