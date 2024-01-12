const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  category: String,
  question: String,
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


module.exports = Quiz;
