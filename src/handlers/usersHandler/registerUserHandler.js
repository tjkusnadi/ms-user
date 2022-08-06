const bcrypt = require('bcrypt');
const { statusCode } = require('../../utils');

const registerUserHandler = async (req, res) => {
  const {
    dbConnector
  } = res.locals;

  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);

  const payload = {
    username,
    password: hashed
  };

  const save = await dbConnector.insertOne(payload);

  res.status(statusCode.CREATED);
  res.send({ message: "user created" });
};

module.exports = registerUserHandler;