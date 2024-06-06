const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const verifyToken = require('../middleware/auth')


router.get('/getAllProducts', verifyToken, productController.getAllProducts);
router.get('/getProduct/:id', productController.getProductById);
router.post('/createProduct', verifyToken, productController.createProduct);
router.put('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;