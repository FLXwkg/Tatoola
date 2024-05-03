const { body } = require('express-validator');

// Validation rules for address creation and update
exports.userAddressValidationRules = [
  body('id_user').notEmpty().withMessage('User ID is required'),
  body('id_address').notEmpty().withMessage('Style ID is required'),
];
