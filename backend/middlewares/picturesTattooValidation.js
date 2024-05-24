const { body } = require('express-validator');

// Validation rules for address creation and update
exports.picturesTattooValidationRules = [
  body('id_tattoo').notEmpty().withMessage('Tattoo ID is required'),
  body('id_picture').notEmpty().withMessage('Picture ID is required'),
];
