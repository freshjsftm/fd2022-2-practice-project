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
    //create token pair
    //send user with token pair
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
