import express from 'express';
import {
  orderSummary,
  isDelivered,
  paidOrder,
  createOrder,
  getUserOder,
  getUserOrders,
  deleteOrder,
} from '../Controller/order.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.put('/:id/deliver', isDelivered);
orderRouter.put('/:id/paid', paidOrder);
orderRouter.delete('/:id', deleteOrder);
orderRouter.get('/:id', getUserOder);
orderRouter.get('/userOders', getUserOrders);
orderRouter.get('/sunnary', orderSummary);

export default orderRouter;
