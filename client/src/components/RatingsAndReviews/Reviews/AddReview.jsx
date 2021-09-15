import React, {useState} from 'react';
import styled from 'styled-components';
import NewReviewForm from './NewReviewForm'

const Wrapper = styled.div`
padding-top: 15px;
padding-bottom: 15px;
`

export default function({reviews, setReviews, sortBy, getMore, id}) {

  const [showForm, setShowForm] = useState(false);

  function moreReviewsClick(e) {
    getMore();
  }

  function toggleForm(e) {
    setShowForm(!showForm);
  }

  return (
    <Wrapper>
      <button onClick={moreReviewsClick}>More reviews</button>   <button onClick={toggleForm} >Add review</button>
      {showForm && <NewReviewForm id={id}/>}
    </Wrapper>
  )
}