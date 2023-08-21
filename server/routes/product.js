import express from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  getProduct,
  getAllProducts,
} from '../Controller/product.js';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.get('/:id', getProduct);
productRouter.get('/', getAllProducts);
productRouter.post('/search', searchProduct);

export default productRouter;
