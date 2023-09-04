import Product from '../Models/productModel.js';
import cloudinary from '../utils/cloudinary.js';
const upload = async (req, res, next) => {
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
  } = req.body;
  try {
    const photo = await cloudinary.uploader.upload(image, {
      folder: 'products',
    });
  } catch (error) {}
};
