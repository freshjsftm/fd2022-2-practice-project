const {
  verifyAccessToken,
  verifyRefreshToken,
} = require('../services/jwtServices');

module.exports.checkAccessToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req; //Bearer asddfhgeh
    const [, accessToken] = authorization.split(' ');
    req.tokenData = await verifyAccessToken(accessToken);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.checkRefreshToken = async (req, res, next) => {
  try {
    const { body: refreshToken } = req;
    req.tokenData = await verifyRefreshToken(refreshToken);
    next();
  } catch (error) {
    next(error);
  }
};
