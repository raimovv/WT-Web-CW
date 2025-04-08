let flashcards = [];
let currentId = 1;

exports.getAll = () => {
    return flashcards;
};

exports.getById = (id) => {
    return flashcards.find(fc => fc.id === parseInt(id));
};

exports.create = (data) => {
    const newFlashcard = {
        id: currentId++,
        word: data.word,
        translation: data.translation,
        language: data.language || '',
        example: data.example || ''
    };
    flashcards.push(newFlashcard);
    return newFlashcard;
};

exports.update = (id, data) => {
    const flashcard = flashcards.find(fc => fc.id === parseInt(id));
    if (!flashcard) return null;
    flashcard.word = data.word;
    flashcard.translation = data.translation;
    flashcard.language = data.language || '';
    flashcard.example = data.example || '';
    return flashcard;
};

exports.delete = (id) => {
    const index = flashcards.findIndex(fc => fc.id === parseInt(id));
    if (index === -1) return false;
    flashcards.splice(index, 1);
    return true;
};
