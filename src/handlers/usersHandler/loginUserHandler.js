const bcrypt = require('bcrypt');
const { authHelper, statusCode } = require('../../utils');

const loginUserHandler = async (req, res) => {
  const {
    dbConnector
  } = res.locals;

  const { username, password } = req.body;
  

  const payload = {
    username
  };

  const userData = await dbConnector.findOne(payload);

  if (userData) {
    const hash = userData.password;
    const compare = await bcrypt.compare(password, hash);
    delete userData.password;

    if (compare) {
        const token = await authHelper({ userData });
        res.status(statusCode.OK);
        return res.send({ token });
    }

    res.status(statusCode.UNAUTHORIZED);
    return res.send({ message: "wrong credentials" });
  }

  res.status(statusCode.NOT_FOUND);
  return res.send({ message: 'user not found' });
};

module.exports = loginUserHandler;