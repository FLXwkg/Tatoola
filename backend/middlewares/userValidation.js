// middlewares/userValidation.js
const { check } = require('express-validator');

const userValidationRules = [
  check('name').notEmpty(),
  check('lastname').notEmpty(),
  check('email').isEmail(),
  check('password').notEmpty(),
  check('description').optional().isString(),
  check('is_artist').isBoolean(),
  check('is_premium').isBoolean()
];

module.exports = {
  userValidationRules
};
