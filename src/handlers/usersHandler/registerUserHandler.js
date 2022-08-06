const bcrypt = require('bcrypt');
const { statusCode } = require('../../utils');

const registerUserHandler = async (req, res) => {
  const {
    dbConnector
  } = res.locals;

  const { username, password, role } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);

  const payload = {
    username,
    password: hashed,
    role
  };

  await dbConnector.insertOne(payload);

  res.status(statusCode.CREATED);
  res.send({ message: "user created" });
};

module.exports = registerUserHandler;