import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';
import { createError } from '../utils/error.js';
import config from '../config.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: 'User already exists' });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: false,
    });

    await user.save();
    res.status(200).send({ message: 'User created' });
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) return next(createError(404, 'user not found!'));
    const isPasswordCurrent = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCurrent)
      return next(createError(400, 'Wrong username or password!'));
    const token = Jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      config.JWT_SECRET,
      { expiresIn: '24h' }
    );
    const { password, isAdmin, ...otherDatails } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
        /*
          secure: true,
          sameSite: 'none',
          maxAge: 24 * 60 * 60 * 1000,
          path: '/',
         signed:true
          */
      })
      .status(200)
      .json({ ...otherDatails, auth: true, isAdmin: isAdmin });
  } catch (err) {
    res.status(500).send({ message: err.message });
    next(err);
  }
};
