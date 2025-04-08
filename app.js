const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const flashcardsRouter = require('./routes/flashcards');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/', indexRouter);
app.use('/flashcards', flashcardsRouter);

// 404 Error handling
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
