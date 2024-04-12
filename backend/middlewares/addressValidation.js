const { body } = require('express-validator');

// Validation rules for address creation and update
exports.addressValidationRules = [
  body('number').notEmpty().withMessage('Number is required'),
  body('label').notEmpty().withMessage('Label is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('postcode').notEmpty().withMessage('Postcode is required'),
  body('latitude').notEmpty().withMessage('Latitude is required'),
  body('longitude').notEmpty().withMessage('Longitude is required')
];
