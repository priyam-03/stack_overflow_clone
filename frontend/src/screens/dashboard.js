import react, { useState, useEffect } from "react";
import { getquestions } from "../app/services/question/questionservices";
import { Link } from "react-router-dom";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestionList();
  }, []);

  const getQuestionList = async () => {
    try {
      const questionlist = await getquestions();
      console.log(questionlist.data);
      setQuestions(questionlist.data.questions);
      console.log(questions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>All questions</h2>
      <div>
        {questions?.map((question) => (
          <Link to={`/question/${question._id}`}>
            <p>{question.question}</p>
            <p>{question.question_description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllQuestions;
