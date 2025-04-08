const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const flashcardsController = require('../controllers/flashcards/index');

router.get('/', flashcardsController.list);

router.get('/new', flashcardsController.new);


router.post(
  '/new',
  [
    body('word')
      .notEmpty().withMessage('Word is required')
      .matches(/^[a-zA-Z\s'-]+$/).withMessage("Word can only contain letters, spaces, ' and -"),
    body('translation').notEmpty().withMessage('Translation is required'),
    body('language').notEmpty().withMessage('Please select a language'),
  ],
  flashcardsController.create
);

router.get('/:id/edit', flashcardsController.edit);

router.post(
  '/:id/edit',
  [
    body('word')
      .notEmpty().withMessage('Word is required')
      .matches(/^[a-zA-Z\s'-]+$/).withMessage("Word can only contain letters, spaces, ' and -"),
    body('translation').notEmpty().withMessage('Translation is required'),
    body('language').notEmpty().withMessage('Please select a language'),
  ],
  flashcardsController.update
);

router.post('/:id/delete', flashcardsController.delete);

module.exports = router;
