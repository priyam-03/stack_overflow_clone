const Question = require("../models/questionModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newQuestion = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const newquestion = await Question.create({
    question: req.body.question,
    author: req.user.name,
    question_author_id: req.user._id,
    question_description: req.body.question_description,
  });
  res.status(200).json({
    success: true,
    newquestion,
  });
});
exports.getAllQuestion = catchAsyncErrors(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).json({
    success: true,
    questions,
  });
});
exports.addAnswer = catchAsyncErrors(async (req, res, next) => {
  const answer = {
    answer_details: req.body.answer_details,
    answer_author: req.user.name,
  };
  const question = await Question.findById(req.params.questionid);
  question.answer.push(answer);
  await question.save();
  res.status(200).json({
    success: true,
    question,
  });
});
exports.getQuestionDetails = async (req, res, next) => {
  const question = await Question.findById(req.params.questionid);

  res.status(200).json({
    success: true,
    question,
  });
};
