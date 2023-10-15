import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shipping: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
      method: String,
    },
    payment: {
      paymentMethod: String,
      paymentResult: {
        orderID: String,
        payerID: String,
        paymentID: String,
      },
    },
    itemPrice: Number,
    taxPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: Date,

    isDelivered: { type: Boolean, required: true, default: false },
    DeliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model('Orders', orderSchema);
export default Orders;
