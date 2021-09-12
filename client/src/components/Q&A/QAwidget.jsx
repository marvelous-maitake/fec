import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import axios from 'axios';


const QAwidget = ( props ) => {
  console.log(props)

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');



  useEffect(() => {
    props.getListQuestions({page: 1, count: 10, product_id: props.product_id})
      .then((response) => {
        console.log('response?', response.results)
        setQuestions(response.results.sort((a, b) => (a.helpness - b.helpness)))
        console.log('after sorting: ', questions)
      })
      .catch(console.log)
  })

  return (
    <div className="qa-widget">
      <h4 className="qa-header">QUESTIONS & ANSWERS</h4>
      <Search />
    </div>
  )
}

export default QAwidget;