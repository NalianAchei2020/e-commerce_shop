import bcrypt from 'bcrypt';
import User from '../Models/userModel.js';
import config from '../config.js';
export const createAdmin = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(config.ADMIN_PASSWORD, salt);
    const user = new User({
      name: config.ADMIN_NAME,
      email: config.ADMIN_EMAIL,
      password: hash,
      isAdmin: true,
    });
    const createUser = await user.save();
    res.send(createUser);
  } catch (err) {
    res.status(500).send({ message: err.message });
    next(err);
  }
};
