import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search';
import QuestionList from './QuestionList';

const QuestionAndAnswer = styled.div`
 background-color: #F7F6F2;
`;

const QAwidget = ( props ) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    props.getListQuestions({page: 1, count: 5, product_id: props.product_id})
      .then((response) => {
        setQuestions(response.results.sort((a, b) => (a.helpness - b.helpness)))
        // console.log('Here is the questions: ', questions);
      })
      .catch(console.log)
  }, [])

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
    console.log('here is the new Q list: ', questions);
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
        product_id={props.product_id}
        searchInput={searchInput}
        questions={questions}
      />
      <button className="add-question-btn">
        <strong>
          ADD A QUESTION +
        </strong>
      </button>
    </QuestionAndAnswer>
  )
}

export default QAwidget;