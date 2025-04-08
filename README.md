# Language Learning App

## Description

This is a web-based Language Learning App designed to help users practice and manage vocabulary using flashcards. Built with Node.js, Express.js and Pug, it allows users to add, view, and manage language flashcards. The application demonstrates core concepts such as routing, MVC structure, form validation and server-side rendering.

## Features

- Add new flashcards with validation.
- View a list of flashcards.
- Simple and clean UI using Pug templates.
- Input validation using express-validator.

## Project Structure

```
LANGUAGE-LEARNING-APP/
├── app.js
├── controllers/
│   └── flashcards/
│       └── index.js
├── routes/
│   ├── flashcards.js
│   └── index.js
├── services/
│   └── flashcards/
│       └── index.js
├── views/
│   └── flashcards/
│       ├── form.pug
│       ├── index.pug
│       └── list.pug
│   └── layout.pug
├── public/
│   └── stylesheets/
│       └── style.css
├── package.json
└── .gitignore
```

## How to Run the App

1. Install Dependencies

   ```
   npm install
   ```

2. Start the Application

   ```
   npm start
   ```

3. Open in Browser

   Go to: http://localhost:3000

## Usage Instructions

- Navigate to the home page and you will be redirected to `/flashcards`.
- Click "Add New Flashcard" to submit a new word with its language, translation, and example sentence.
- All fields are required and validated before submission.

## Technical Details

- Backend Framework: Express.js
- Template Engine: Pug
- Styling: Plain CSS
- Validation: express-validator
- Logging: Morgan

## Student Details

- Name: [Your Name Here]
- Roll No: [Your Roll Number Here]
- Subject: Web Technology – Semester 2
- Instructor: [Instructor Name]

