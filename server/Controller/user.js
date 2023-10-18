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

//update user
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(401).send({
        message: 'User Not Found',
      });
    } else {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updateUser = await user.save();
      res.send({
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
