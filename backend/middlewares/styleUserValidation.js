const { body } = require('express-validator');

// Validation rules for style creation and update
exports.styleUserValidationRules = [
  body('id_user').notEmpty().withMessage('User ID is required'),
  body('id_style').notEmpty().withMessage('Style ID is required'),
];
