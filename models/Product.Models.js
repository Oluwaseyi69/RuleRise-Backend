// // Define the product schema and model
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   description: String
// });

const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  reviewer: {
      type: String,
      required: true
  },
  rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
  },
  comment: {
      type: String,
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true

  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  brand: {
      type: String,
      required: true
  },
  stock: {
      type: Number,
      required: true,
      min: 0
  },
  discountPercentage: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
  },  
  reviews: [reviewSchema],
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

