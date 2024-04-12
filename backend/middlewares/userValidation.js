const { check } = require('express-validator');

const userValidationRules = [
  check('name').notEmpty().withMessage('Name is required'),
  check('lastname').notEmpty().withMessage('Lastname is required'),
  check('email').isEmail().withMessage('Email is not valid'),
  check('password').notEmpty().withMessage('Password is required'),
  check('description').optional().isString().withMessage('Description must be a string'),
  check('is_artist').isBoolean().withMessage('is_artist must be a boolean'),
  check('is_premium').isBoolean().withMessage('is_premium must be a boolean')
];

module.exports = {
  userValidationRules
};
