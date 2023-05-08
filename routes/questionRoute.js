const express = require("express");
const { upload } = require("../utils/filehelper");
const {
  newQuestion,
  getAllQuestion,
  addAnswer,
  getQuestionDetails,
} = require("../controllers/questionController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/newQuestion").post(isAuthenticatedUser, newQuestion);
router.route("/allquestion").get(getAllQuestion);
router.route("/addAnswer/:questionid").post(isAuthenticatedUser, addAnswer);
router.route("/getQuestionDetails/:questionid").get(getQuestionDetails);
module.exports = router;
