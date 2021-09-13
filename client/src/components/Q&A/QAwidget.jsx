import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';

const QAwidget = ( props ) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    props.getListQuestions({page: 1, count: 5, product_id: props.product_id})
      .then((response) => {
        setQuestions(response.results.sort((a, b) => (a.helpness - b.helpness)))
        //console.log('Here is the first question: ', questions[0])
      })
      .catch(console.log)
  })

  return (
    <div className="qa-widget">
      <h4 className="qa-header">QUESTIONS & ANSWERS</h4>
      <Search />
      <QuestionList
        product_id={props.product_id}
        questions={questions}
      />
      <button className="add-question-btn">
        <strong>
          ADD A QUESTION +
        </strong>
      </button>
    </div>
  )
}

export default QAwidget;