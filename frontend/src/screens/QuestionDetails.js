import React, { Fragment, useEffect, useState } from "react";
import {
  getQuestionDetails,
  addAnswer,
} from "../app/services/question/questionservices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";

const QuestionDetails = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Question, setQuestion] = useState({});
  const [answer_details, setanswer_details] = useState("");

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // const { userInfo } = useSelector((state) => state.auth);
  // console.log(id);
  const getQuestion = async () => {
    try {
      setLoading(true);

      const fetchedquesion = await axios.get(
        `http://localhost:4000/api/v1/getQuestionDetails/${id}`
      );
      // console.log(fetchedquesion.data);
      setQuestion(fetchedquesion.data.question);

      setLoading(false);
      // setBook(...Book, result.data.book);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestion();
  }, []);
  // console.log(id);

  const addNewAnswer = async () => {
    if (answer_details === "") {
      alert("answer cannot be blank");
    } else {
      try {
        const result = await addAnswer(answer_details, id);
        // console.log(result.data);
        setQuestion(result.data.question);
        navigate("/user-profile");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onValueChange = (e) => {
    setanswer_details(e.target.value);
  };
  // console.log(Question);
  return (
    <div>
      {loading && !Question && <div>Loading</div>}
      {!loading && Question.question && (
        <div>
          <p>{Question.question}</p>
          <p>{Question.question_description}</p>
          <p>{Question.author}</p>
          <p>{Question.createdAt}</p>
          {Question.answer.map((answer) => (
            <>
              <p>{answer.answer_details}</p>
              <p>{answer.answer_author}</p>
            </>
          ))}
          <FormControl>
            <InputLabel htmlFor="my-input">Write your answer</InputLabel>
            <Input
              name="answer_details"
              onChange={(e) => onValueChange(e)}
              id="my-input"
            />
          </FormControl>
          <Button onClick={addNewAnswer}>Add answer</Button>
        </div>
      )}
    </div>
  );
};
export default QuestionDetails;
