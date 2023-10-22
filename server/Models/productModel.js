import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: [true, 'Please add product name'] },
    description: {
      type: String,
      required: [true, 'Please add product description'],
    },
    category: { type: String, required: [true, 'Please add product category'] },
    subcategory: {
      type: String,
      required: [true, 'Please add product subcategory'],
    },
    bestSeller: { type: Boolean, default: false },
    newArrival: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    brand: { type: String, required: true },
    image: {
      public_id: { type: String, required: [true, 'Image is required'] },
      url: { type: String, required: true },
    },
    price: { type: Number, default: 0.0, required: true },
    countInStock: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0.0, required: true },
    numReview: { type: Number, default: 0, required: true },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
