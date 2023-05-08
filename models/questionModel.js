const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
    },
    question_description: {
      type: String,
    },
    question_author_id: { type: Schema.Types.ObjectId, ref: "Userauth" },
    author: { type: String },
    answer: {
      type: [
        {
          answer_details: {
            type: String,
          },

          answer_author: { type: String },
        },
      ],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Question", questionSchema);
