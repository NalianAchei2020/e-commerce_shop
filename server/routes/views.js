import express from 'express';
import data from '../data.js';

const viewsRouter = express.Router();

let userCount = 10;
const products = data.products;

viewsRouter.post('/product/view', (req, res) => {
  const productID = req.body.id;
  const product = products.find((p) => p.id === productID);
  if (product) {
    userCount++;
  }

  res.sendStatus(200);
});

viewsRouter.post('/product/leave', (req, res) => {
  const productID = req.body.id;
  const product = products.find((p) => p.id === productID);

  if (product) {
    userCount--;
  }

  res.sendStatus(200);
});

viewsRouter.get('/product/count', (req, res) => {
  res.json({ count: userCount });
});

export default viewsRouter;
