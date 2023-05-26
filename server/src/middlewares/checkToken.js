const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const TokenError = require('../errors/TokenError');
const userQueries = require('../controllers/queries/userQueries');
const { verifyAccessToken } = require('../services/jwtServices');

module.exports.checkAuth = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req; 
    const [, accessToken] = authorization.split(' ');
    const tokenData = await verifyAccessToken(accessToken);
    const foundUser = await userQueries.findUser({ id: tokenData.userId });
    foundUser.password = undefined;
    res.send(foundUser);
  } catch (err) {
    next(new TokenError());
  }
};
