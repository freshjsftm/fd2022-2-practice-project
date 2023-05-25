const createHTTPErrors = require('http-errors');
const { User } = require('../models');
module.exports.signUp = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    //find user
    const user = await User.findOne({
      where: { email },
    });
    //compare password
    if (user && (await user.comparePassword(password))) {
      //create token pair
      //send user with token pair
    }
    next(createHTTPErrors(401, 'Unauthorized'));
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
