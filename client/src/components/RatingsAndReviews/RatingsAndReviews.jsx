import React from 'react';
import Ratings from './Ratings/Ratings';
import Reviews from './Reviews/Reviews';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 90%;
  padding: 20px;
`

const Title = styled.h2`
  font-weight: normal;
`

const RatingsDiv = styled.div`
  width: 20%;
  float: left;
`;

const ReviewsDiv = styled.div`
  width: 80%;
  float: right;
`;

export default function RatingsAndReviews({id}) {
  return (
    <Wrapper>
      <Title>RATINGS & REVIEWS</Title>
      <RatingsDiv>
        <Ratings id={id}/>
      </RatingsDiv>
      <ReviewsDiv>
        <Reviews id={id}/>
      </ReviewsDiv>
    </Wrapper>
  )
}