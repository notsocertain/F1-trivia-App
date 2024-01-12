const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    questions: [{
      question: {
        type: String,
        required: true
      },
      isUserAnswerCorrect: {
        type: Boolean,
        default: false
      },
      answer:{
        type:String,
      },
      correctAnswer: {
        type: String,
        required: true
      }
    }],
    category: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
    totalCorrectAnswers: {
      type: Number,
      default: 0
    },
    percentageCorrectAnswers: {
      type: Number,
      default: 0
    }
  },
  {timestamps:true});
  
  QuizSchema.pre('save', function(next) {
    this.questions.forEach(question => {
      question.isUserAnswerCorrect = question.answer === question.correctAnswer; // Assuming string comparison
    });
  
    this.totalCorrectAnswers = this.questions.filter(q => q.isUserAnswerCorrect).length;
    this.percentageCorrectAnswers = (this.totalCorrectAnswers / this.questions.length) * 100;
  
    next();
  });
  
const Result = mongoose.model('Result', QuizSchema);

module.exports = Result;
