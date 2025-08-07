const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    p_name: {
        type: String,
        required: true
    },
    p_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;