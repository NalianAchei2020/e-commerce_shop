import Product from '../Models/productModel.js';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import data from '../data.js';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// create a product
export const createProduct = async (req, res, next) => {
  const {
    name,
    category,
    price,
    description,
    countInStock,
    image,
    subcategory,
    rating,
    numReview,
    brand,
    bestSeller,
    trending,
    newArrival,
    featured,
  } = req.body;
  try {
    const opts = {
      overwrite: true,
      invalidate: true,
      resource_type: 'auto',
    };
    const result = await cloudinary.uploader.upload_large(image, {
      opts,
      folder: 'products',
    });
    //console.log(result);
    const product = new Product({
      name,
      category,
      price,
      description,
      countInStock,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      subcategory,
      rating,
      numReview,
      brand,
      bestSeller,
      trending,
      newArrival,
      featured,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      res
        .status(201)

        .send({ message: 'Product Created', product: createdProduct });
    } else {
      res.status(500).send({ message: 'Error in creating product' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// update a product
export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.brand = req.body.brand;
      product.category = req.body.category;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(500).send({ message: 'Error in updaing product' });
      }
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// delete product
export const deleteProduct = async (req, res, next) => {
  try {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      const deletedProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deletedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// search product
export const searchProduct = async (req, res, next) => {
  try {
    const searchKeyword = req.query.searchKeyword
      ? {
          name: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {};
    const products = await Product.find({ ...searchKeyword });
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//get product
export const getProduct = async (req, res, next) => {
  try {
    const Product = data.products.find((x) => x._id === req.params.id);
    if (Product) {
      res.send(Product);
    } else {
      res.status(404).send({ message: 'Product not found!' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//post a review
export const postReview = async (req, res, next) => {
  try {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      const review = {
        rating: req.body.rating,
        comment: req.body.comment,
        user: req.user._id,
        name: req.user.name,
      };
      product.reviews.push(review);
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      product.numReview = product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Comment Created.',
        data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      throw Error('Product does not exist.');
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};
