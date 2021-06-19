const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const favorite = {
  body: Joi.object().keys({
    post: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  favorite,
};
