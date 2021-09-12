import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './Ratings/Ratings';
import Reviews from './Reviews/Reviews';
import {API_KEY} from '../../config/config';
import styled from 'styled-components';

const RatingsDiv = styled.div`
  width: 33%;
  float: left;
`;

const ReviewsDiv = styled.div`
  width: 67%;
  float: right;
`;

export default function RatingsAndReviews({id}) {
  const [sortBy, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?sort=${sortBy}&product_id=${id}`,
      {headers: {'content-type': 'application/json', 'authorization': API_KEY}})
        .then(res => setReviews(res.data.results))
        .catch(err => console.error(err))
  }, [sortBy])

  return (
    <>
      <RatingsDiv>
        {reviews && <Ratings id={id}/>}
      </RatingsDiv>
      <ReviewsDiv>
        {reviews && <Reviews reviews={reviews} sortBy={sortBy} setSortBy={setSortBy}/>}
      </ReviewsDiv>
    </>
  )
}