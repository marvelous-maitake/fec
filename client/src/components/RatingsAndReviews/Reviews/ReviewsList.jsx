import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Helpful from './Helpful';
import StarsGraphic from './StarsGraphic';
import Images from './Images';

const Review = styled.div`
  border-bottom: solid black 1px;
  padding-top: 15px
`;

const PostInfo = styled.span`
  float: right;
  font-size: 80%;
`;

const Response = styled.div`
  background-color: #dedede;
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
        <Images review={review} />
        {review.response && <Response>
          <p><strong>Response:</strong></p>
          <p>{review.response}</p>
        </Response>}
          <Helpful review={review} />
      </Review>
    ))}
    </>
  )
}
