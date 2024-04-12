const { body } = require('express-validator');

exports.pictureValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
  body('image_url').notEmpty().withMessage('Image URL is required')
];
