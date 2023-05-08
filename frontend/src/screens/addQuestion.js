import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { questionUpload } from "../app/services/question/questionservices";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const intialvalue = {
  question: "",
  question_description: "",
};
const AddQuesion = () => {
  const [newquestion, setNewquestion] = useState(intialvalue);
  const navigate = useNavigate();

  const uploadQuestion = async () => {
    await questionUpload(newquestion);
    navigate("/user-profile");
  };
  const onValueChange = (e) => {
    setNewquestion({ ...newquestion, [e.target.name]: e.target.value });
  };

  // const addUserDetails = async() => {
  //     awquestion_descriptionait addUser(user);
  //
  // }

  return (
    <Container>
      <Typography variant="h4">Add Question</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="question"
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">description</InputLabel>
        <Input
          name="question_description"
          onChange={(e) => onValueChange(e)}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => uploadQuestion()}
        >
          Add Question
        </Button>
      </FormControl>
      <div className="col-2"></div>
    </Container>
  );
};

export default AddQuesion;
