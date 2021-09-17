import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';

const QuestionAndAnswer = styled.div`
 background-color: #F7F6F2;
`;

const Mdoal = styled.div`
  background-color: #F9F9F9;
`;

const QAwidget = ( { product_id } ) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [questionCounter, setQuestionCounter] = useState(2);
  const [addQuestion, setAddQuestion] = useState(false)
  const [questionsToView, setQuestionsToView] = useState([])

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${product_id}&page=1&count=99`)
      .then((response) => {
        setQuestions(response.data.results.sort((a, b) => (a.helpness - b.helpness)))
        setQuestionsToView(response.data.results.sort((a, b) => (a.helpness - b.helpness)))
        // console.log('questions: ', response.data.results)
      })
      .catch(console.log)
  }, [product_id])

  // handle search input
  const handleSearchInput = (searchInput) => {
    if (searchInput.length >= 3) {
      setSearchInput(searchInput);

    } else {
      setSearchInput('')
    }
    filterQList(searchInput);
  }

  // filter qustion list
  const filterQList = (searchInput) => {
    if (searchInput) {
      const newQlist = questions.filter( qObj => {
        if (qObj.question_body.toLowerCase().includes(searchInput.toLowerCase())) {
          return qObj
        };
      });
      setQuestionsToView(newQlist);
    } else {
      setQuestionsToView(questions)
    }
  }

  // Add-question modal on submit
  const handleQModalSubmit = () => {
    setAddQuestion(false)
  }

  // handle "SHOW MORE QUESTIONS" button
  const handleQuestionBtn = (e) => {
    if (questionCounter === questions.length) {
      setQuestionCounter(2)
    } else {
      setQuestionCounter(questionCounter + 2)
    }
    console.log(questionCounter);
  }

  return (
    <QuestionAndAnswer>
      <h4 className="qa-header">QUESTIONS & ANSWERS</h4>
      <div>
        <Search
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
      </div>
      <QuestionList
        product_id={product_id}
        searchInput={searchInput}
        questions={questionsToView}
        questionCounter={questionCounter}
      />
      {questionCounter >= questions.length
        ? <button
            className="load-more-questions-btn"
            onClick={() => {handleQuestionBtn()}}
          >
            <strong>COLLAPSE QUESTIONS</strong>
          </button>
        : <button
            className="load-more-questions-btn"
            onClick={() => {handleQuestionBtn()}}
          >
            <strong>SHOW MORE QUESTIONS</strong>
          </button>
      }
      <button
        style={{margin: 10}}
        className="add-question-btn"
        onClick={() => setAddQuestion(true)}
      >
        <strong>
          ADD A QUESTION +
        </strong>
      </button>
      <AddQuestion
        product_id={product_id}
        open={addQuestion}
        onClose={() => {setAddQuestion(false)}}
      />


    </QuestionAndAnswer>

  )
}

export default QAwidget;