import Order from '../Models/orderModel.js';
import Product from '../Models/productModel.js';
import User from '../Models/userModel.js';

// get all order in the admin dashboard
export const orderSummary = async (req, res, next) => {
  try {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({
      users,
      orders: orders.length === 0 ? [{ numOrders: 0, totalSales: 0 }] : orders,
      dailyOrders,
      productCategories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//get all user's orders
export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//get user's order
export const getUserOder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

// create order
export const createOrder = async (req, res, next) => {
  try {
    const order = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      payment: req.body.payment,
      itemPrice: req.body.itemPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).send({ message: 'New Order Created', order: createOrder });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//paid order
export const paidOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment.paymentResult = {
        payerID: req.body.payerID,
        paymentID: req.body.paymentID,
        orderID: req.body.orderID,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//delete order
export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deletedOrder = await order.remove();
      res.send({ message: 'Order Deleted', product: deletedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};

//orders dilivered
export const isDelivered = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.DeliveredAt = Date.now();
      const updatedOrder = await order.save();
      res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    next(error);
  }
};
