import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding-top: 15px;
padding-bottom: 15px;
`

export default function({reviews, setReviews, sortBy, getMore}) {

  function moreReviewsClick(e) {
    getMore();
  }

  return (
    <Wrapper>
      <button onClick={moreReviewsClick}>More reviews</button>   <button>Add review</button>
    </Wrapper>
  )
}