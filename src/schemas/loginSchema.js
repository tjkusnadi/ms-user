const Joi = require('joi');

const loginSchema = (post) => {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .min(3)
      .max(30)
      .required()
  });
  return schema.validate(post);
};

module.exports = loginSchema;