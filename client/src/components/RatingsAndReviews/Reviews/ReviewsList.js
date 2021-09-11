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

const Response = styled.div`
  background-color: #ddd;
  padding: 3px 12px 3px 12px;
  margin: 5px 0px 20px 0px;
`

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
        {review.response && <Response>
          <p><strong>Response:</strong></p>
          <p>{review.response}</p>
        </Response>}
          <Helpful review={review}/>
      </Review>
    ))}
    </>
  )
}
