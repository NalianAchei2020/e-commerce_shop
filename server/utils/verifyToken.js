import jwt from 'jsonwebtoken';
import { createError } from './error.js';
import config from '../config.js';

export const generateToken = (user) => {
  return jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, config.JWT_SECRET, {
    expiresIn: '24h',
  });
};
export const verifiedToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'You are not authenticated'));
  }
  jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) return next(createError(401, 'Token is not valid'));
    req.user = user;
    next();
  });
};
export const verifyUser = (req, res, next) => {
  verifiedToken(req, res, next, (err) => {
    if (req.user._id === req.params._id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError('You are authorized'));
    }
  });
};
export const verifyAdmin = (req, res, next) => {
  verifiedToken(req, res, next, (err) => {
    if (req.user._id === req.params._id && req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError('You are authorized'));
    }
  });
};
