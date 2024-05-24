const { body } = require('express-validator');

// Validation rules for tatto creation and update
exports.tattooUserValidationRules = [
  body('id_user').notEmpty().withMessage('User ID is required'),
  body('id_tattoo').notEmpty().withMessage('Tattoo ID is required'),
];