const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  category: String,
  question: String,
  difficulty:String,
  options: {
    type: [{ name: String }],
    validate: {
      validator: function (value) {
        return value.length === 4;
      },
      message: 'Options must have exactly 4 items.',
    },
  },
  correctAnswer: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);
// F1 related questions
const f1Questions = 
[
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What is the primary color of the Ferrari F1 team?",
    "options": [
      { "name": "Red" },
      { "name": "Yellow" },
      { "name": "Black" },
      { "name": "White" }
    ],
    "correctAnswer": "Red"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What are the primary colors of the McLaren F1 team?",
    "options": [
      { "name": "Papaya Orange and Blue" },
      { "name": "Red and White" },
      { "name": "Green and Yellow" },
      { "name": "Black and Silver" }
    ],
    "correctAnswer": "Papaya Orange and Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What is the primary color of the Mercedes F1 team?",
    "options": [
      { "name": "Silver" },
      { "name": "Black" },
      { "name": "Blue" },
      { "name": "Red" }
    ],
    "correctAnswer": "Silver"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What are the primary colors of the Red Bull Racing F1 team?",
    "options": [
      { "name": "Blue, Red, and Yellow" },
      { "name": "Black and White" },
      { "name": "Green and White" },
      { "name": "Red and White" }
    ],
    "correctAnswer": "Blue, Red, and Yellow"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What is the primary color of the Aston Martin F1 team?",
    "options": [
      { "name": "Green" },
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "Yellow" }
    ],
    "correctAnswer": "Green"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What is the primary color of the Alpine F1 team?",
    "options": [
      { "name": "Blue" },
      { "name": "White" },
      { "name": "Red" },
      { "name": "Black" }
    ],
    "correctAnswer": "Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What are the primary colors of the Alfa Romeo Racing F1 team?",
    "options": [
      { "name": "Red and White" },
      { "name": "Black and Yellow" },
      { "name": "Blue and White" },
      { "name": "Green and White" }
    ],
    "correctAnswer": "Red and White"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What is the primary color of the Williams F1 team?",
    "options": [
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "White" },
      { "name": "Yellow" }
    ],
    "correctAnswer": "Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What is the primary color of the AlphaTauri F1 team?",
    "options": [
      { "name": "White" },
      { "name": "Black" },
      { "name": "Red" },
      { "name": "Blue" }
    ],
    "correctAnswer": "White"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What are the primary colors of the Haas F1 team?",
    "options": [
      { "name": "Black, White, and Red" },
      { "name": "Blue and Yellow" },
      { "name": "Green and White" },
      { "name": "Red and White" }
    ],
    "correctAnswer": "Black, White, and Red"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What was the primary color of the Racing Point F1 team (now Aston Martin)?",
    "options": [
      { "name": "Pink" },
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "Yellow" }
    ],
    "correctAnswer": "Pink"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What was the primary color of the Sauber (now Alfa Romeo Racing) F1 team?",
    "options": [
      { "name": "White" },
      { "name": "Blue" },
      { "name": "Yellow" },
      { "name": "Red" }
    ],
    "correctAnswer": "White"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What was the primary color of the Toro Rosso (now AlphaTauri) F1 team?",
    "options": [
      { "name": "Dark Blue" },
      { "name": "Red" },
      { "name": "Yellow" },
      { "name": "Black" }
    ],
    "correctAnswer": "Dark Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What was the primary color of the Jordan F1 team?",
    "options": [
      { "name": "Yellow" },
      { "name": "Red" },
      { "name": "Blue" },
      { "name": "Green" }
    ],
    "correctAnswer": "Yellow"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What were the primary colors of the Lotus (now Alpine) F1 team?",
    "options": [
      { "name": "Black and Gold" },
      { "name": "Green and Yellow" },
      { "name": "Red and White" },
      { "name": "Blue and Silver" }
    ],
    "correctAnswer": "Black and Gold"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What was the primary color of the Brawn GP F1 team?",
    "options": [
      { "name": "White" },
      { "name": "Blue" },
      { "name": "Black" },
      { "name": "Yellow" }
    ],
    "correctAnswer": "White"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What were the primary colors of the BAR (now Honda) F1 team?",
    "options": [
      { "name": "Black and White" },
      { "name": "Blue and Yellow" },
      { "name": "Red and White" },
      { "name": "Green and White" }
    ],
    "correctAnswer": "Black and White"
  },
  {
    "category": "Colors",
    "difficulty": "Hard",
    "question": "What was the primary color of the Prost F1 team?",
    "options": [
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "Yellow" },
      { "name": "Green" }
    ],
    "correctAnswer": "Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Easy",
    "question": "What were the primary colors of the Stewart F1 team?",
    "options": [
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "Yellow" },
      { "name": "Green" }
    ],
    "correctAnswer": "Blue"
  },
  {
    "category": "Colors",
    "difficulty": "Medium",
    "question": "What was the primary color of the Ligier (now Prost) F1 team?",
    "options": [
      { "name": "Blue" },
      { "name": "Red" },
      { "name": "Yellow" },
      { "name": "Green" }
    ],
    "correctAnswer": "Blue"
  }
]

  
  
  
  // Add more questions here...



// Save F1 questions to the database
const saveQuestions = async () => {
  for (const questionData of f1Questions) {
    const question = new Quiz(questionData);
    try {
      await question.save();
      console.log('Question saved to the database');
    } catch (err) {
      console.error(err);
    }
  }
};

// saveQuestions();


module.exports = Quiz;
