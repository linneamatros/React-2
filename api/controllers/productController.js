const router = require('express').Router();              // Måste ha stort "R" i router efter express
const productModel = require('../models/products/productModel');                 
const auth = require('../authentication/auth');


router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProduct);

router.post('/new', auth.verifyToken, productModel.createProduct);

router.patch('/:id', auth.verifyToken, productModel.updateProduct);
router.delete('/:id', auth.verifyToken, productModel.deleteProduct);


module.exports = router;
