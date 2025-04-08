const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const flashcardsController = require('../controllers/flashcards/index');

const wordValidation = body('word')
  .notEmpty().withMessage('Word is required')
  .matches(/^[A-Za-z\s'-]+$/).withMessage("Word can only contain letters, spaces, apostrophes, and hyphens");

const translationValidation = body('translation')
  .notEmpty().withMessage('Translation is required');

const languageValidation = body('language')
  .isIn(['Uzbek', 'English', 'Russian']).withMessage('Please choose a valid language');

// Create a new flashcard
router.post('/new', [
    wordValidation,
    translationValidation,
    languageValidation
], flashcardsController.create);

// Update an existing flashcard
router.post('/:id/edit', [
    wordValidation,
    translationValidation,
    languageValidation
], flashcardsController.update);

// Other routes remain the same...
router.get('/', flashcardsController.list);
router.get('/new', flashcardsController.new);
router.get('/:id/edit', flashcardsController.edit);
router.post('/:id/delete', flashcardsController.delete);

module.exports = router;
