const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

module.exports = (err, req, res, next) => {
  console.log('LOG ERROR ====>>>>>>', err.message);
  console.log('LOG ERROR ====>>>>>>', err.status);
  if (
    err.message ===
      'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
      'new row for relation "Users" violates check constraint "Users_balance_ck"'
  ) {
    err.message = 'Not Enough money';
    err.status = 406;
    return res.status(err.status).send(err.message);
  }

  if (err instanceof TokenExpiredError) {
    res.status(408).send('Token Expired');
  }
  if (err instanceof JsonWebTokenError) {
    res.status(401).send('Token invalid!');
  }

  if (!err.message || !err.status) {
    res.status(500).send('Server Error');
  } else {
    res.status(err.status).send(err.message);
  }
};
