import React from 'react';
import Ratings from './Ratings/Ratings';
import Reviews from './Reviews/Reviews';
import styled from 'styled-components';


const StyledDivider = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 25vw;
`

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 90%;
  padding: 20px;
`

const Title = styled.h1`
  font-weight: bold;
`

const RatingsDiv = styled.div`
  width: 25%;
  float: left;
`;

const ReviewsDiv = styled.div`
  width: 75%;
  float: right;
`;

export default function RatingsAndReviews({id}) {
  return (
    <Wrapper id="RatingsAndReviews">
      <h2 style={{ textAlign: 'center' }}>reviews</h2>
      <StyledDivider><StyledImg src='https://i.imgur.com/ZC0BXZY.png' /></StyledDivider>
      <br />
      <RatingsDiv>
        <Ratings id={id}/>
      </RatingsDiv>
      <ReviewsDiv>
        <Reviews id={id}/>
      </ReviewsDiv>
    </Wrapper>
  )
}