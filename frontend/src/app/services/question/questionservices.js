import axios from "axios";

const usersUrl = "http://localhost:4000/api/v1";

export const questionUpload = async (question) => {
  console.log(question);
  try {
    return await axios.post(
      `/api/v1/newQuestion`,
      question,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      { withCredentials: true }
    );
  } catch (error) {
    if (error.response && error.response.data.message) {
      console.log(error.response.data.message);
    } else {
      console.log(error.response.data.message);
    }
  }
};
export const getquestions = async () => {
  return await axios.get(`/api/v1/allquestion`);
};
export const getQuestionDetails = async (id) => {
  console.log(id);
  const data = axios.get(`api/v1/getQuestionDetails/${id}`);
  console.log(data);
  return data;
};
export const addAnswer = async (answer_details, id) => {
  try {
    return await axios.post(
      `/api/v1//addAnswer/${id}`,
      { answer_details },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      { withCredentials: true }
    );
  } catch (error) {
    if (error.response && error.response.data.message) {
      console.log(error.response.data.message);
    } else {
      console.log(error.response.data.message);
    }
  }
};
