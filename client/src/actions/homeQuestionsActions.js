import axios from 'axios';

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  ASK_QUESTION,
  QUESTION_LOADING,
  HOME_QUESTIONS,
  ALL_QUESTIONS
} from './types';

// Add Post
export const askQuestion = questionData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/questions/ask', questionData)
    .then(res =>
      dispatch({
        type: ASK_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get Questions for home
export const getQuestionsHome = () => dispatch => {
  console.log("Started Loading")
  dispatch(setQuestionLoading());
  console.log("In Questions")
  axios
    .get('/api/questions/home')
    .then(res => {
        console.log({'Actions':res.data});
        dispatch({
          type: HOME_QUESTIONS,
          payload: res.data
        })
      }
    )
    .catch(err => {
      console.log("ERROR in Getting Questions")
        dispatch({
          type: HOME_QUESTIONS,
          payload: null
        })
    }

    );
};

//Get Questions for home
export const getAllQuestions = () => dispatch => {
  console.log("Started Loading")
  dispatch(setQuestionLoading());
  console.log("In Questions")
  axios
    .get('/api/questions/')
    .then(res => {
        console.log({'Actions':res.data});
        dispatch({
          type: ALL_QUESTIONS,
          payload: res.data
        })
      }
    )
    .catch(err => {
        console.log("ERROR in Getting Questions")
        dispatch({
          type: ALL_QUESTIONS,
          payload: null
        })
      }

    );
};
// Set loading state
export const setQuestionLoading = () => {
  return {
    type: QUESTION_LOADING
  };
};


// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};