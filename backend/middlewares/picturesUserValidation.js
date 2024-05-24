const { body } = require('express-validator');

// Validation rules for address creation and update
exports.picturesUserValidationRules = [
  body('id_user').notEmpty().withMessage('User ID is required'),
  body('id_picture').notEmpty().withMessage('Picture ID is required'),
];
