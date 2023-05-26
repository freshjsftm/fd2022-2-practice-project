const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const signJWT = promisify(jwt.sign);

const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_TIME,
} = require('../constants');

const createToken = (payload, { secret, time }) => {
  return signJWT(
    {
      userId: payload.id,
      email: payload.email,
      role: payload.role,
    },
    secret,
    {
      expiresIn: time,
    }
  );
};

module.exports.createTokenPair = async (payload) => {
  return {
    access: await createToken(payload, {
      secret: ACCESS_TOKEN_SECRET,
      time: ACCESS_TOKEN_TIME
    }),
    refresh: await createToken(payload, {
      secret: REFRESH_TOKEN_SECRET,
      time: REFRESH_TOKEN_TIME
    })
  }
}