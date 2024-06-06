require('dotenv').config();

const Product = require('../models/Product.Models')

exports.createProduct = async (req, res) => {
  const { title, description, category, price, stock, brand, discountPercentage, tags } = req.body;
  console.log("Tags receievd:", tags)
  try {
      const newProduct = new Product({ title, description, category, price, stock, brand, discountPercentage, tags});
      await newProduct.save();
      console.log("saved with tags:", newProduct.tags)
      res.status(201).json(newProduct);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
      const products = await Product.find();
      res.status(200).json(products);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { title, description, category, price, stock, brand, discountPercentage, tags } = req.body;
  try {
      const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          { title, description, category, price, stock, brand, discountPercentage, tags},
          { new: true }
      );
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(updatedProduct);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id; 

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(204).json({message: "Successfully deleted"}); 
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

