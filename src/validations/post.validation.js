const Joi = require('@hapi/joi');
const { password } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const social = {
  body: Joi.object().keys({
    access_token: Joi.string().required(),
    type: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  social,
};
