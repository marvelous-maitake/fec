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
  const [answerCounter, setAnswserCounter] = useState(1)
  const [searchInput, setSearchInput] = useState('');
  const [counter, setCounter] = useState(2);
  const [addQuestion, setAddQuestion] = useState(false)

  useEffect(() => {
    axios.get(`/qa/questions?product_id=${product_id}&page=1&count=5`)
      .then((response) => {
        setQuestions(response.data.results.sort((a, b) => (a.helpness - b.helpness)))
        // console.log(response)
      })
      .catch(console.log)
  }, [product_id])

  // handle search input
  const handleSearchInput = (searchInput) => {
    if (searchInput.length >= 3) {
      setSearchInput(searchInput);
      filterQList(searchInput);
    } else {
      setSearchInput('')

    }
  }

  // filter qustion list
  const filterQList = (searchInput) => {
    const newQlist = questions.filter( qObj => {
      if (qObj.question_body.toLowerCase().includes(searchInput.toLowerCase())) {
        return qObj
      };
    });
    setQuestions(newQlist);
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
        questions={questions}
        counter={counter}
        answerCounter = {answerCounter}
      />
      <button
        className="more-answer-btn"
        onClick={() => setAnswserCounter(answerCounter + 1)}
      ><strong>
        LOAD MORE ANSWERS
        </strong>
      </button>
      <button
        className="load-more-questions-btn"
        onClick={() => setCounter(counter + 1)}
      >
        <strong>
          SHOW MORE QUESTIONS
        </strong>
      </button>
      <button
        className="add-question-btn"
        onClick={ () => setAddQuestion(true)}
      >
        <strong>
          ADD A QUESTION +
        </strong>
      </button>
      <AddQuestion
        open={addQuestion}
        onClose={() => {setAddQuestion(false)}}
      />


    </QuestionAndAnswer>

  )
}

export default QAwidget;