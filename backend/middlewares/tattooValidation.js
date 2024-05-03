const { body } = require('express-validator');

// Validation rules for address creation and update
exports.tattooValidationRules = [
  body('is_premium').notEmpty().withMessage('is_premium is required'),
  body('id_user').notEmpty().withMessage('User ID is required'),
  body('id_style').notEmpty().withMessage('Style ID is required'),
];
