const Joi = require('joi');

exports.getTodo = Joi.object({
  userId: Joi.number().integer().positive().required(),
});
