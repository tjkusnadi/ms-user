const Joi = require('joi');

const registerSchema = (post) => {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .min(3)
      .max(30)
      .required(),
    role: Joi.string().required()
  });
  return schema.validate(post);
};

module.exports = registerSchema;