import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Helpful from './Helpful';
import StarsGraphic from './StarsGraphic';

const Review = styled.div`
  border-bottom: solid black 1px;
  padding-top: 15px
`;

const PostInfo = styled.span`
  float: right;
  color: grey;
  font-size: 15px;
`;

export default function ReviewsList({sortBy, setSortBy, reviews}) {
  return (
    <>
    {reviews.map(review => (
      <Review key={review.review_id}>
        <div>
          <StarsGraphic review={review}/>
          <PostInfo>{review.reviewer_name}, {moment(review.date).utc().format('MMMM D, YYYY')}</PostInfo>
        </div>
        <h3>{review.summary}</h3>
        <p>{review.body}</p>
        <Helpful review={review}/>
      </Review>
    ))}
    </>
  )
}
