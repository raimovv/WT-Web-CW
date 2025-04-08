const flashcardsService = require('../../services/flashcards');
const { validationResult } = require('express-validator');

// List all flashcards
exports.list = (req, res) => {
    const flashcards = flashcardsService.getAll();
    res.render('flashcards/list', { title: 'Flashcards', flashcards });
};

// Render form for creating a new flashcard
exports.new = (req, res) => {
    res.render('flashcards/form', { title: 'New Flashcard', flashcard: {} });
};

// Create a new flashcard
exports.create = (req, res) => {
    console.log('FORM SUBMITTED:', req.body); // ✅ Debug log
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('VALIDATION ERRORS:', errors.array()); // ✅ Debug log
      return res.render('flashcards/form', {
        title: 'New Flashcard',
        flashcard: req.body,
        errors: errors.array(),
      });
    }
  
    flashcardsService.create(req.body);
    res.redirect('/flashcards');
};
// Render form for editing an existing flashcard
exports.edit = (req, res) => {
    const flashcard = flashcardsService.getById(req.params.id);
    if (!flashcard) {
        return res.status(404).send('Flashcard not found');
    }
    res.render('flashcards/form', { title: 'Edit Flashcard', flashcard });
};

// Update an existing flashcard
exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.body.id = req.params.id;
        return res.render('flashcards/form', { title: 'Edit Flashcard', flashcard: req.body, errors: errors.array() });
    }
    const updated = flashcardsService.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).send('Flashcard not found');
    }
    res.redirect('/flashcards');
};

// Delete a flashcard
exports.delete = (req, res) => {
    const deleted = flashcardsService.delete(req.params.id);
    if (!deleted) {
        return res.status(404).send('Flashcard not found');
    }
    res.redirect('/flashcards');
};
